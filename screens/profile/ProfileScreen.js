import {View, Text, Image, TouchableOpacity} from 'react-native';
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
import { saveLocalStorage } from '../../common/LocalStorage';

export default function ProfileScreen() {
  const orders = useSelector(state => state.profileReducer.orders);
  const profileData = useSelector(state => state.profileReducer.profile);
  const token = useSelector(state => state.loginReducer.accessToken);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    dispatch(getProfile(token));
  }, [profileData]);

  const onSignOut = ()=>{
    navigation.dispatch(StackActions.replace(screens.login_screen));
    saveLocalStorage(KEY_ACCESS_TOKEN, '');
  }

  return (
    <>
      <AppBarProduct idScreen={screens.profile_screen} />
      {/* container */}
      <View style={styles.container}>
        {/* title */}
        <Text style={styles.title}>My Profile</Text>
        <View style={styles.content_container}>
          {/* profile container */}
          <View style={styles.profile_container}>
            {/* content center */}
            <View style={styles.profile_container_content_center}>
              {/* avatar */}
              <Image source={IMAGES.avatar_url_2} style={styles.avatar} />
              {/* name */}
              <Text style={styles.profile_container_content_center__name}>
                {profileData.name}
              </Text>
            </View>
            {/* content left*/}
            <View style={styles.profile_container_content_left}>
              {/* email */}
              <View
                style={styles.profile_container_content_left_email_container}>
                <Image
                  source={ICONS.email}
                  style={
                    styles.profile_container_content_left_email_container__image
                  }
                />
                <Text
                  style={
                    styles.profile_container_content_left_email_container__text
                  }>
                  {profileData.email}
                </Text>
              </View>
              {/* gender */}
              <View
                style={styles.profile_container_content_left_gender_container}>
                <FontAwesomeIcon icon={faVenusMars} size={20} />
                <Text
                  style={
                    styles.profile_container_content_left_gender_container__text
                  }>
                  {profileData.gender ? 'Male' : 'Female'}
                </Text>
              </View>
              {/* phone */}
              <View
                style={styles.profile_container_content_left_phone_container}>
                <FontAwesomeIcon icon={faPhone} size={20} />
                <Text
                  style={
                    styles.profile_container_content_left_phone_container__text
                  }>
                  {profileData.phone}
                </Text>
              </View>
            </View>
          </View>

          {/* line */}
          <View style={styles.line} />

          {/* edit profile container */}
          <TouchableOpacity
            onPress={() => navigation.navigate(screens.edit_profile_screen)}
            style={styles.tag_profile_container}>
            {/* tag profile content left */}
            <View style={styles.tag_profile_container_content_left}>
              <Image
                source={ICONS.edit_profile}
                style={styles.tag_profile_container_content_left__image}
              />
              <Text style={styles.tag_profile_container_content_left__text}>
                Edit Profile
              </Text>
            </View>
            <FontAwesomeIcon icon={faChevronRight} size={22} />
          </TouchableOpacity>

          {/* change password container */}
          <TouchableOpacity
            onPress={() => navigation.navigate(screens.change_password_screen)}
            style={styles.tag_profile_container}>
            {/* tag profile content left */}
            <View style={styles.tag_profile_container_content_left}>
              <Image
                source={ICONS.edit_password}
                style={styles.tag_profile_container_content_left__image}
              />
              <Text style={styles.tag_profile_container_content_left__text}>
                Change Password
              </Text>
            </View>
            {/* tag profile content right */}
            <FontAwesomeIcon icon={faChevronRight} size={22} />
          </TouchableOpacity>

          {/* order history container */}
          <TouchableOpacity
            onPress={() => navigation.navigate(screens.order_history_screen)}
            style={styles.tag_profile_container}>
            {/* tag profile content left */}
            <View style={styles.tag_profile_container_content_left}>
              <Image
                source={ICONS.order_history}
                style={styles.tag_profile_container_content_left__image}
              />
              <Text style={styles.tag_profile_container_content_left__text}>
                Order History
              </Text>
            </View>
            {/* tag profile content right */}
            <FontAwesomeIcon icon={faChevronRight} size={22} />
          </TouchableOpacity>

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
                style={[styles.tag_profile_container_content_left__image, styles.logout_icon_color]}
              />
              <Text style={[styles.tag_profile_container_content_left__text, styles.logout_color]}>
                Log Out
              </Text>
            </View>
            {/* tag profile content right */}
            <FontAwesomeIcon icon={faChevronRight} size={22} color={COLORS.red}/>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
