import {View, Text, Image} from 'react-native';
import React from 'react';
import { styles } from '../style/profileStyle';
import { ICONS, IMAGES } from '../../../common/Images';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPhone, faVenusMars } from '@fortawesome/free-solid-svg-icons';

export default function TagProfile({profileData}) {
  return (
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
        <View style={styles.profile_container_content_left_email_container}>
          <Image
            source={ICONS.email}
            style={styles.profile_container_content_left_email_container__image}
          />
          <Text
            style={styles.profile_container_content_left_email_container__text}>
            {profileData.email}
          </Text>
        </View>
        {/* gender */}
        <View style={styles.profile_container_content_left_gender_container}>
          <FontAwesomeIcon icon={faVenusMars} size={20} />
          <Text
            style={
              styles.profile_container_content_left_gender_container__text
            }>
            {profileData.gender ? 'Male' : 'Female'}
          </Text>
        </View>
        {/* phone */}
        <View style={styles.profile_container_content_left_phone_container}>
          {/* <FontAwesomeIcon icon={faPhone} size={20} /> */}
          <Image source={ICONS.phone} style={{height: 24, width: 24}}/>
          <Text
            style={styles.profile_container_content_left_phone_container__text}>
            {profileData.phone}
          </Text>
        </View>
      </View>
    </View>
  );
}
