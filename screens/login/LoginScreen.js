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
  faUser,
  faUnlock,
  faEye,
  faEnvelope,
  faEyeSlash,
  faCheck,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';

import {styles} from './styles/LoginStyles';
import {IMAGES} from '../../common/Images';
import {screens} from '../../common/Contants';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {checkLogin, getLocalAccessToken} from './LoginThunk';
import {COLORS} from '../../common/Theme';
export default function LoginScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [isHide, setIsHide] = useState(true);

  let email = '';
  let password = '';

  const accessToken = useSelector(state => state.loginReducer.accessToken);
  const message = useSelector(state => state.loginReducer.message);
  useEffect(() => {
    dispatch(getLocalAccessToken());
  }, []);

  const onChangeEmail = text => {
    email = text;
  };
  const onChangePassword = text => {
    password = text;
  };

  // console.log('email: ' + email + ' password: ' + userPassword);

  const onSignIn = () => {
    // console.log('email: ', email);
    if (email === '' || password === '') {
      console.log('email: ' + email, 'password' + password);
      console.log('Please enter your email and password');
    } else {
      dispatch(checkLogin({email: email, password: password}));
    }
  };

  const onPressRegister = () => {
    navigation.navigate(screens.register_screen);
  };

  const onForgotPassword = () => {
    navigation.navigate(screens.forgot_password_screen);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <ImageBackground source={IMAGES.background} style={{flex: 1}}>
          <View style={styles.container_background_overlay}>
            {/* TITLE */}
            <View
              style={{
                flex: 1,
                alignment: 'center',
                justifyContent: 'center',
              }}>
              <View style={styles.text_container}>
                <Text style={[styles.text_secondary, styles.title]}>
                  Welcome To Dato
                </Text>
              </View>
            </View>

            {/* INPUT */}
            <View style={styles.input_container}>
              <View style={styles.input_container__input}>
                <FontAwesomeIcon icon={faEnvelope} />
                <TextInput
                  placeholder={`Email`}
                  onChangeText={text => onChangeEmail(text)}
                  placeholderTextColor="#fff"
                  style={[styles.input, styles.text]}
                />
              </View>
              <View style={styles.input_container__input}>
                <FontAwesomeIcon icon={faUnlock} />
                <TextInput
                  secureTextEntry={isHide}
                  placeholder={`Password`}
                  onChangeText={text => onChangePassword(text)}
                  placeholderTextColor="#FFF"
                  style={[styles.input, styles.text]}
                />
                <TouchableOpacity onPress={() => setIsHide(!isHide)}>
                  <FontAwesomeIcon icon={isHide ? faEyeSlash : faEye} />
                </TouchableOpacity>
              </View>
            </View>

            {/* BUTTON SIGN IN */}
            <View style={{flex: 1}}>
              <TouchableOpacity
                onPress={() => onSignIn()}
                style={[styles.btn, styles.btn_sign_in__shadow]}>
                <Text style={styles.btn_sign_in}>SIGN IN</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.text_container}>
              {/* REGISTER */}
              <View style={styles.text_sign_up}>
                <Text style={styles.text_gray}>Not a member?</Text>
                <TouchableOpacity onPress={() => onPressRegister()}>
                  <Text style={styles.text_secondary}> REGISTER </Text>
                </TouchableOpacity>
                <Text style={styles.text_gray}>here.</Text>
              </View>

              {/* FORGOT PASSWORD */}
              <View style={styles.forgot_password}>
                <TouchableOpacity onPress={() => onForgotPassword()}>
                  <Text style={styles.text_secondary}>Forgot Password?</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
}
