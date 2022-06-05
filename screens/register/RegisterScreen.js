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
import React, {useEffect, useState} from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faUnlock,
  faEye,
  faEyeSlash,
  faEnvelope,
  faSignature,
  faPhone,
  faVenusMars,
  faXmark,
  faCheck,
} from '@fortawesome/free-solid-svg-icons';

import {Picker} from '@react-native-picker/picker';

import {styles} from './style/RegisterScreenStyle';
import {IMAGES} from '../../common/Images';
import {COLORS, SIZES} from '../../common/Theme';
import {screens} from '../../common/Contants';
import {StackActions, useNavigation} from '@react-navigation/native';
import RegisterForm from './components/RegisterForm';
export default function ProfileAndPasswordScreen() {
  const navigation = useNavigation();

  const [userError, setUserError] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
  });

  // useEffect(() => {
  //   console.log(fieldData);
  // }, [
  //   fieldData.name,
  //   fieldData.email,
  //   fieldData.password,
  //   fieldData.confirmPassword,
  //   fieldData.phone,
  //   fieldData.gender,
  // ]);

  const onChangeName = text => {
    setFieldData({...fieldData, name: text});
  };

  const onChangeEmail = text => {
    setFieldData({...fieldData, email: text});
  };

  const onChangePassword = text => {
    setFieldData({...fieldData, password: text});
    //min 8 character
    if (text.length >= 8) {
      setHaveMinEightChars(true);
    } else {
      setHaveMinEightChars(false);
    }

    //1 upperCase
    if (text.match(/[A-Z]/)) {
      setHaveUpperCase(true);
    } else {
      setHaveUpperCase(false);
    }

    //1 lowerCase
    if (text.match(/[a-z]/)) {
      setHaveLowerCase(true);
    } else {
      setHaveLowerCase(false);
    }

    //1 number
    if (text.match(/[0-9]/)) {
      setHaveOneNumber(true);
    } else {
      setHaveOneNumber(false);
    }

    //1 special character
    if (text.match(/[!\@\#\$\%\^\&\*\(\)\_\-\+\=\?\>\<\.\,]/)) {
      setHaveSpecialChars(true);
    } else {
      setHaveSpecialChars(false);
    }
  };

  const onChangeConfirmPassword = text => {
    setFieldData({...fieldData, confirmPassword: text});
  };
  const onChangePhone = text => {
    setFieldData({...fieldData, phone: text});
  };

  const validate = () => {
    let isValid = false;

    const newUserError = {
      userName: '',
      userEmail: '',
      userPassword: '',
      confirmPassword: '',
      userPhoneNumber: '',
    };
    if (fieldData.name.trim().length === 0) {
      newUserError.userName = 'Please enter a valid full name.';
      isValid = false;
    }

    if (isValid) {
      console.log('successful');
      // addUserInfo(fieldData);
      // localStorage.setItem('userInfo', JSON.stringify(addUserInfo));
    } else {
      // history.push('/Login')

      setUserError({...newUserError});
    }
  };
  // name === '' && (
  //   <Text style={[styles.marginTop16, styles.text_validate]}>
  //     Please enter a valid full name.
  //   </Text>
  // )

  // email === '' ||
  //   (!email.match(
  //     /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
  //   ) && (
  //     <Text style={[styles.marginTop16, styles.text_validate]}>
  //       Please enter a valid email address.
  //     </Text>
  //   ))

  // password !== '' ? (
  //   hintValidatePassword()
  // ) : (
  //   <Text style={[styles.marginTop16, styles.text_validate]}>
  //     Password does not meet minimum requirements
  //   </Text>
  // )

  // (confirmPassword === '' || confirmPassword !== password) && (
  //   <Text style={[styles.marginTop16, styles.text_validate]}>
  //     Password dose not match
  //   </Text>
  // )

  // phone === '' ||
  //   (!phone.match(/((09|03|07|08|05)+([0-9]{8})\b)/g) && (
  //     <Text style={[styles.marginTop16, styles.text_validate]}>
  //       Please enter a valid phone number.
  //     </Text>
  //   ))

  // switch (text) {
  //   case 'name':
  // name === '' && (
  //   <Text style={[styles.marginTop16, styles.text_validate]}>
  //     Please enter a valid full name.
  //   </Text>
  // );
  //     break;
  //   case 'email':
  // email === '' ||
  //   (!email.match(
  //     /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
  //   ) && (
  // <Text style={[styles.marginTop16, styles.text_validate]}>
  //   Please enter a valid email address.
  // </Text>
  //   ));
  //     break;
  //   case 'password':
  // password !== '' ? (
  //   hintValidatePassword()
  // ) : (
  //   <Text style={[styles.marginTop16, styles.text_validate]}>
  //     Password does not meet minimum requirements
  //   </Text>
  // );
  //     break;
  //   case 'confirm_password':
  // (confirmPassword === '' || confirmPassword !== password) && (
  //   <Text style={[styles.marginTop16, styles.text_validate]}>
  //     Password dose not match
  //   </Text>
  // );
  //     break;
  //   case 'phone':
  // phone === '' ||
  //   (!phone.match(/((09|03|07|08|05)+([0-9]{8})\b)/g) && (
  //     <Text style={[styles.marginTop16, styles.text_validate]}>
  //       Please enter a valid phone number.
  //     </Text>
  //   ));
  //     break;
  // }

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground source={IMAGES.background2} style={{flex: 1}}>
          <View style={styles.container_background_overlay}>
            <View style={{marginBottom: 40}}>
              {/* TITLE */}
              <Text
                style={[
                  styles.title,
                  styles.text_secondary,
                  styles.marginLeft16,
                ]}>
                BECOME A DATO MEMBER
              </Text>
              <Text style={[styles.text, styles.marginLeft16]}>
                Complete the following data
              </Text>
              <Text style={[styles.text, styles.marginLeft16]}>
                to enter the shop
              </Text>
            </View>

            <View style={{flex: 3}}>
              <RegisterForm />
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
}
