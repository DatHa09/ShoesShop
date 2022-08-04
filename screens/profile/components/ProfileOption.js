import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {screens} from '../../../common/Contants';
import {useNavigation} from '@react-navigation/native';
import { styles } from '../style/profileStyle';
import { ICONS } from '../../../common/Images';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

export default function ProfileOption() {
  const navigation = useNavigation();
  return (
    <>
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
            Orders History
          </Text>
        </View>
        {/* tag profile content right */}
        <FontAwesomeIcon icon={faChevronRight} size={22} />
      </TouchableOpacity>
    </>
  );
}
