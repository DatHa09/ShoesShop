import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {COLORS, FONTS} from '../../common/Theme';
import {useDispatch, useSelector} from 'react-redux';
import Animated from 'react-native-reanimated';
import {getLocalOrders, getProfile} from './profileScreenThunk';
import AppBarProduct from '../../common/AppBarProduct';
import {KEY_ACCESS_TOKEN, screens} from '../../common/Contants';
import {ICONS, IMAGES} from '../../common/Images';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faChevronRight,
  faPhone,
  faVenusMars,
} from '@fortawesome/free-solid-svg-icons';
import {StackActions, useNavigation} from '@react-navigation/native';
import {styles} from './style/profileStyle';
import {saveLocalStorage} from '../../common/LocalStorage';
import TagProfile from './components/TagProfile';
import ProfileOption from './components/ProfileOption';

export default function ProfileScreen() {
  const profileData = useSelector(state => state.profileReducer.profile);
  const countProfile = useSelector(state => state.profileReducer.count);
  const token = useSelector(state => state.loginReducer.accessToken);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    dispatch(getProfile(token));
  }, [countProfile]);

  const onSignOut = () => {
    navigation.dispatch(StackActions.replace(screens.login_screen));
    saveLocalStorage(KEY_ACCESS_TOKEN, '');
  };

  return (
    <>
      <AppBarProduct idScreen={screens.profile_screen} />
      {/* container */}
      <View style={styles.container}>
        <View style={styles.content_container}>
          {/* profile info */}
          <TagProfile profileData={profileData} />

          {/* line */}
          <View style={styles.line} />

          {/* edit profile, change password, order history */}
          <ProfileOption />

          {/* line */}
          <View style={styles.line} />

          {/* logout container */}
          <TouchableOpacity
            onPress={() => onSignOut()}
            style={styles.tag_profile_container}>
            {/* tag profile content left */}
            <View style={styles.tag_profile_container_content_left}>
              <Image
                source={ICONS.logOut}
                style={[
                  styles.tag_profile_container_content_left__image,
                  styles.logout_icon_color,
                ]}
              />
              <Text
                style={[
                  styles.tag_profile_container_content_left__text,
                  styles.logout_color,
                ]}>
                Log Out
              </Text>
            </View>
            {/* tag profile content right */}
            <FontAwesomeIcon
              icon={faChevronRight}
              size={22}
              color={COLORS.red}
            />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
