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
  Modal,
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
import {ICONS, IMAGES} from '../../common/Images';
import {
  lowercaseRegex,
  numericRegex,
  screens,
  specialCharsRegex,
  uppercaseRegex,
} from '../../common/Contants';
import {StackActions, useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {checkLogin, getLocalAccessToken} from './LoginThunk';
import {COLORS} from '../../common/Theme';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {globalStyles} from '../../common/style/globalStyle';
export default function LoginScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [isHideNewPassword, setIsHideNewPassword] = useState(true);

  const [modalVisible, setModalVisible] = useState(false);

  const [notification, setNotification] = useState({
    isSuccess: false,
    message: '',
  });

  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .required('Please enter your email address.')
      .email('Your email ís not valid.'),
    password: Yup.string()
      .required('Please enter your password.')
      .matches(uppercaseRegex, 'One uppercase is required.')
      .matches(lowercaseRegex, 'One lowercase is required.')
      .matches(numericRegex, 'One number is required.')
      .matches(specialCharsRegex, 'One special character is required.')
      .min(6, 'Minimum 6 characters required.'),
  });

  const onSignIn = async values => {
    const result = await dispatch(checkLogin(values));
    if (
      result.payload.statusCode === 404 ||
      result.payload.statusCode === 400
    ) {
      console.log('Login failed');
      setNotification({
        isSuccess: false,
        message: 'Incorrect email address or password!',
      });
      setModalVisible(true);
    } else if (
      result.payload.statusCode === 201 ||
      result.payload.statusCode === 200
    ) {
      console.log('Login successful');
      dispatch(getLocalAccessToken());
      setNotification({isSuccess: true, message: 'Login Successfully!'});
      setModalVisible(true);
      setTimeout(() => {
        setModalVisible(!modalVisible);
        navigation.dispatch(StackActions.replace(screens.bottom_tab_home));
      }, 500);
    }
  };

  const onPressRegister = () => {
    navigation.navigate(screens.register_screen);
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

            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={values => onSignIn(values)}>
              {props => (
                <View style={styles.input_container}>
                  {/* Email */}
                  <View style={styles.input_container__input}>
                    <FontAwesomeIcon icon={faEnvelope} />
                    <TextInput
                      placeholder={`Email`}
                      onChangeText={props.handleChange('email')}
                      onBlur={props.handleBlur('email')}
                      value={props.values.email}
                      placeholderTextColor="#fff"
                      style={[styles.input, styles.text]}
                    />
                  </View>
                  {props.touched.email && props.errors.email && (
                    <View style={globalStyles.validate_container}>
                      <FontAwesomeIcon
                        icon={faXmark}
                        color={COLORS.red}
                        size={24}
                        style={{marginLeft: 12}}
                      />
                      <Text style={globalStyles.validate_container__text}>
                        {props.errors.email}
                      </Text>
                    </View>
                  )}

                  {/* Password */}
                  <View style={styles.marginVertical16}>
                    <View style={styles.input_container__input}>
                      <FontAwesomeIcon icon={faUnlock} size={20} />
                      <TextInput
                        secureTextEntry={isHideNewPassword}
                        placeholder={`Password`}
                        onChangeText={props.handleChange('password')}
                        onBlur={props.handleBlur('password')}
                        value={props.values.password}
                        placeholderTextColor="#FFF"
                        style={[styles.input, styles.text]}
                      />
                      <TouchableOpacity
                        onPress={() =>
                          setIsHideNewPassword(!isHideNewPassword)
                        }>
                        <Image
                          source={isHideNewPassword ? ICONS.hide : ICONS.show}
                          style={{width: 24, height: 24}}
                        />
                      </TouchableOpacity>
                    </View>
                    {props.touched.password && props.errors.password && (
                      <View style={globalStyles.validate_container}>
                        <FontAwesomeIcon
                          icon={faXmark}
                          color={COLORS.red}
                          size={24}
                          style={{marginLeft: 12}}
                        />
                        <Text style={globalStyles.validate_container__text}>
                          {props.errors.password}
                        </Text>
                      </View>
                    )}
                  </View>

                  {/* Button Confirm */}
                  <TouchableOpacity
                    disabled={!props.dirty || !props.isValid}
                    onPress={() => props.handleSubmit()}
                    style={[
                      styles.btn,
                      {
                        backgroundColor:
                          !props.dirty || !props.isValid
                            ? COLORS.lightGray4
                            : COLORS.secondary,
                      },
                    ]}>
                    <Text
                      style={[
                        styles.btn_sign_in,
                        {
                          color:
                            !props.dirty || !props.isValid
                              ? COLORS.darkGray
                              : COLORS.black3,
                        },
                      ]}>
                      SIGN IN
                    </Text>
                  </TouchableOpacity>

                  <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                      setModalVisible(!modalVisible);
                    }}>
                    <View style={globalStyles.centeredView}>
                      <View
                        style={[
                          globalStyles.modalView,
                          {
                            backgroundColor: notification.isSuccess
                              ? COLORS.backgroundSuccess
                              : COLORS.backgroundError,
                            borderColor: notification.isSuccess
                              ? COLORS.borderSuccess
                              : COLORS.borderError,
                          },
                        ]}>
                        <View style={globalStyles.modalView_container}>
                          <FontAwesomeIcon
                            icon={notification.isSuccess ? faCheck : faXmark}
                            color={
                              notification.isSuccess ? COLORS.green : COLORS.red
                            }
                            size={24}
                            style={{marginRight: 12}}
                          />
                          <Text style={globalStyles.modalText}>
                            {notification.message}
                          </Text>
                        </View>
                        {!notification.isSuccess && (
                          <TouchableOpacity
                            style={[
                              globalStyles.button,
                              globalStyles.buttonClose,
                            ]}
                            onPress={() => setModalVisible(!modalVisible)}>
                            <Text style={globalStyles.textStyle}>OK</Text>
                          </TouchableOpacity>
                        )}
                      </View>
                    </View>
                  </Modal>
                </View>
              )}
            </Formik>

            <View style={styles.text_container}>
              {/* REGISTER */}
              <View style={styles.text_sign_up}>
                <Text style={styles.text_gray}>Not a member?</Text>
                <TouchableOpacity onPress={() => onPressRegister()}>
                  <Text style={styles.text_secondary}> REGISTER </Text>
                </TouchableOpacity>
                <Text style={styles.text_gray}>here.</Text>
              </View>
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
}
