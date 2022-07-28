import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {COLORS, FONTS} from '../../common/Theme';
import {useDispatch, useSelector} from 'react-redux';
import Animated from 'react-native-reanimated';
import {getLocalOrders} from './profileScreenThunk';
import AppBarProduct from '../../common/AppBarProduct';
import {screens} from '../../common/Contants';
import {ICONS, IMAGES} from '../../common/Images';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faChevronRight,
  faPhone,
  faVenusMars,
} from '@fortawesome/free-solid-svg-icons';
import {useNavigation} from '@react-navigation/native';
import {styles} from './style/profileStyle';

export default function ProfileScreen() {
  const orders = useSelector(state => state.profileReducer.orders);
  const profileData = useSelector(state => state.profileReducer.profile);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  console.log(profileData);

  return (
    <>
      <AppBarProduct idScreen={screens.profile_screen} />
      {/* container */}
      <View style={styles.container}>
        {/* title */}
        <Text style={styles.title_container__text}>My Profile</Text>
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
                Edit profile
              </Text>
            </View>
            <FontAwesomeIcon icon={faChevronRight} size={22} />
          </TouchableOpacity>

          {/* change password container */}
          {/* tag profile */}
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
                Change password
              </Text>
            </View>
            {/* tag profile content right */}
            <FontAwesomeIcon icon={faChevronRight} size={22} />
          </TouchableOpacity>

          {/* order history container */}
          {/* tag profile */}
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
                Order history
              </Text>
            </View>
            {/* tag profile content right */}
            <FontAwesomeIcon icon={faChevronRight} size={22} />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
