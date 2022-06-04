import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faUnlock,
  faEye,
  faEyeSlash,
  faEnvelope,
  faSignature,
  faPhone,
  faVenusMars,
} from '@fortawesome/free-solid-svg-icons';

import {Picker} from '@react-native-picker/picker';

import {styles} from './styles/UpdatePasswordScreenStyle';
import {IMAGES} from '../../common/Images';
import {COLORS} from '../../common/Theme';
import {screens} from '../../common/Contants';
import {StackActions, useNavigation} from '@react-navigation/native';

export default function UpdatePasswordScreen() {
  const navigation = useNavigation();
  const [isHideNewPassword, setIsHideNewPassword] = useState(true);
  const [isHideConfirmPassword, setIsHideConfirmPassword] = useState(true);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <ImageBackground
          source={IMAGES.background3}
          style={styles.container_background_image}>
          <View style={styles.container_background_overlay}>
            {/* TITLE */}
            <View style={{flex: 1}}>
              <Text
                style={[
                  styles.title,
                  styles.text_secondary,
                  styles.marginLeft16,
                ]}>
                Update Password
              </Text>
              <Text style={[styles.text, styles.marginLeft16]}>
                Complete the following latest data
              </Text>
              <Text style={[styles.text, styles.marginLeft16, {marginBottom: 184}]}>
                to enter the shop
              </Text>
            </View>
            {/* INPUT*/}
            <View style={styles.input_container}>
              {/*NEW PASSWORD */}
              <View style={styles.input_container__input}>
                <FontAwesomeIcon icon={faUnlock} size={20} />
                <TextInput
                  secureTextEntry={isHideConfirmPassword}
                  placeholder={`New password`}
                  placeholderTextColor="#FFF"
                  style={[styles.input, styles.text_input]}
                />
                <TouchableOpacity
                  onPress={() => setIsHideNewPassword(!isHideNewPassword)}>
                  <FontAwesomeIcon
                    icon={isHideNewPassword ? faEyeSlash : faEye}
                  />
                </TouchableOpacity>
              </View>

              {/* CONFIRM NEW PASSWORD */}
              <View style={styles.input_container__input}>
                <FontAwesomeIcon icon={faUnlock} size={20} />

                <TextInput
                  secureTextEntry={isHideConfirmPassword}
                  placeholder={`Confirm new password`}
                  placeholderTextColor="#FFF"
                  style={[styles.input, styles.text_input]}
                />
                <TouchableOpacity
                  onPress={() =>
                    setIsHideConfirmPassword(!isHideConfirmPassword)
                  }>
                  <FontAwesomeIcon
                    icon={isHideConfirmPassword ? faEyeSlash : faEye}
                  />
                </TouchableOpacity>
              </View>
            </View>
            {/* BUTTON 2*/}
            <View style={styles.btn_container}>
              <TouchableOpacity
                onPress={() =>
                  navigation.dispatch(
                    StackActions.replace(screens.login_screen),
                  )
                }
                style={[styles.btn, styles.btn_sign_in__shadow]}>
                <Text style={styles.btn_sign_in}>Save Update</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
}
