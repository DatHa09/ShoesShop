import {
  SafeAreaView,
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';

//import FontAwesome
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faUser,
  faUnlock,
  faEye,
  faEyeSlash,
  faAngleLeft,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';

import {styles} from './styles/ForgotPasswordScreenStyle';
import {IMAGES} from '../../common/Images';
import {COLORS} from '../../common/Theme';

export default function ForgotPasswordScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={IMAGES.background3}
        style={styles.container_background_image}>
        <View style={styles.container_background_overlay}>
          {/* APP BAR */}
          <TouchableOpacity style={styles.app_bar}>
            <FontAwesomeIcon
              icon={faAngleLeft}
              color={COLORS.secondary}
              size={48}
            />
          </TouchableOpacity>
          {/* TITLE */}
          <View style={styles.title_container}>
            <Text
              style={[
                styles.title,
                styles.text_secondary,
                styles.marginLeft16,
              ]}>
              Reset Password
            </Text>
            <Text style={[styles.text, styles.marginLeft16]}>
              Enter Email to Reset Password
            </Text>
          </View>
          {/* INPUT */}
          <View style={styles.input_container}>
            <Text
              style={[
                styles.text,
                styles.opacity,
                {color: '#fff', marginBottom: 8},
              ]}>
              Email
            </Text>
            <View style={[styles.input_container__input, styles.opacity]}>
              <FontAwesomeIcon icon={faPhone} />
              <TextInput
                placeholder={`Enter your email`}
                placeholderTextColor="#fff"
                style={[styles.input, styles.text_input]}
              />
            </View>

            {/* BUTTON */}
            <View style={styles.btn_container}>
              <TouchableOpacity
                style={[styles.btn, styles.btn_sign_in__shadow]}>
                <Text style={styles.btn_sign_in}>Reset</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
