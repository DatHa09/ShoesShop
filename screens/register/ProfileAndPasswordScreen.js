import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity,
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

import {styles} from './style/ProfileAndPasswordScreenStyle';
import {IMAGES} from '../../common/Images';
import {COLORS} from '../../common/Theme';
import {screens} from '../../common/Contants';
export default function ProfileAndPasswordScreen() {
  const [isHideNewPassword, setIsHideNewPassword] = useState(true);
  const [isHideConfirmPassword, setIsHideConfirmPassword] = useState(true);
  const [selectedLanguage, setSelectedLanguage] = useState();

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={IMAGES.background2}
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
              Profile & Password
            </Text>
            <Text style={[styles.text, styles.marginLeft16]}>
              Complete the following latest data
            </Text>
            <Text style={[styles.text, styles.marginLeft16]}>
              to enter the shop
            </Text>
          </View>
          {/* INPUT*/}
          <View style={styles.input_container}>
            {/* NAME */}
            <View style={styles.input_container__input}>
              <FontAwesomeIcon icon={faSignature} size={20} />
              <TextInput
                placeholder={`Name`}
                placeholderTextColor="#fff"
                style={[styles.input, styles.text_input]}
              />
            </View>

            {/* EMAIL */}
            <View style={styles.input_container__input}>
              <FontAwesomeIcon icon={faEnvelope} size={20} />
              <TextInput
                placeholder={`Email`}
                placeholderTextColor="#fff"
                style={[styles.input, styles.text_input]}
              />
            </View>

            {/* PASSWORD */}
            <View style={styles.input_container__input}>
              <FontAwesomeIcon icon={faUnlock} size={20} />
              <TextInput
                secureTextEntry={isHideNewPassword}
                placeholder={`Password`}
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

            {/* CONFIRM PASSWORD */}
            <View style={styles.input_container__input}>
              <FontAwesomeIcon icon={faUnlock} size={20} />

              <TextInput
                secureTextEntry={isHideConfirmPassword}
                placeholder={`Confirm password`}
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

            {/* PHONE */}
            <View style={styles.input_container__input}>
              <FontAwesomeIcon icon={faPhone} size={20} />
              <TextInput
                placeholder={`Phone`}
                placeholderTextColor="#fff"
                style={[styles.input, styles.text_input]}
              />
            </View>

            {/* GENDER PICKER */}
            <View style={styles.gender}>
              <FontAwesomeIcon icon={faVenusMars} size={20} />
              <Picker
                style={styles.genderPicker}
                selectedValue={selectedLanguage}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedLanguage(itemValue)
                }>
                <Picker.Item label="Male" value="male" />
                <Picker.Item label="Female" value="female" />
                <Picker.Item label="Other" value="other" />
              </Picker>
            </View>
          </View>

          {/* BUTTON 2*/}
          <View style={styles.btn_container}>
            <TouchableOpacity style={[styles.btn, styles.btn_sign_in__shadow]}>
              <Text style={styles.btn_sign_in}>Confirmation</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
