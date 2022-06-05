import {
  SafeAreaView,
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  ScrollView
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
  faEnvelope
} from '@fortawesome/free-solid-svg-icons';

import {styles} from './style/RegisterStyle';
import {IMAGES} from '../../common/Images';
import {COLORS} from '../../common/Theme';
import {StackActions, useNavigation} from '@react-navigation/native';
import {screens} from '../../common/Contants';

export default function RegisterScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView >


      <ImageBackground
        source={IMAGES.background2}
        style={styles.container_background_image}>
        <View style={styles.container_background_overlay}>
          {/* 1 */}
          <View style={{flex: 2}}>
            {/* APP BAR */}
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.app_bar}>
              <FontAwesomeIcon
                icon={faAngleLeft}
                color={COLORS.secondary}
                size={48}
              />
            </TouchableOpacity>
            {/* TITLE */}
            <Text
              style={[
                styles.title,
                styles.text_secondary,
                styles.marginLeft16,
              ]}>
              Register Account
            </Text>
            <Text style={[styles.text, styles.marginLeft16, {marginBottom:124}]}>
              Enter Email to Register
            </Text>
          </View>
          {/* INPUT 1*/}
          <View style={styles.input_container}>
            <Text style={[styles.text, {color: '#fff', marginBottom: 8}]}>
              Email
            </Text>
            <View style={styles.input_container__input}>
              <FontAwesomeIcon icon={faEnvelope} />
              <TextInput
                placeholder={`Enter your email`}
                placeholderTextColor="#fff"
                style={[styles.input, styles.text_input]}
              />
            </View>
          </View>
          {/* BUTTON 2*/}
          <View style={styles.btn_container}>
            <TouchableOpacity
              onPress={() =>
                navigation.dispatch(
                  StackActions.replace(screens.profile_password_screen),
                )
              }
              style={[styles.btn, styles.btn_sign_in__shadow]}>
              <Text style={styles.btn_sign_in}>Continue</Text>
            </TouchableOpacity>
          </View>
          {/* LOGIN 1*/}
          <View style={styles.text_sign_up}>
            <Text style={styles.text_gray}>Have an account?</Text>
            <TouchableOpacity
              onPress={() =>
                navigation.dispatch(StackActions.replace(screens.login_screen))
              }>
              <Text style={styles.text_secondary}> SIGN IN </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
}
