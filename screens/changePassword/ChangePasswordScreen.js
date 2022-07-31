import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Modal,
} from 'react-native';
import React, {useState} from 'react';
import AppBarProduct from '../../common/AppBarProduct';
import {
  lowercaseRegex,
  numericRegex,
  screens,
  specialCharsRegex,
  uppercaseRegex,
} from '../../common/Contants';
import {COLORS} from '../../common/Theme';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {faCheck, faXmark} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {styles} from './style/ChangePasswordStyle';
import {globalStyles} from '../../common/style/globalStyle';
import {ICONS} from '../../common/Images';
import {useDispatch, useSelector} from 'react-redux';
import {changePassword} from '../profile/profileScreenThunk';
import {checkLogin} from '../login/LoginThunk';

export default function ChangePasswordScreenSlice() {
  const profileData = useSelector(state => state.profileReducer.profile);
  const token = useSelector(state => state.loginReducer.accessToken);

  const dispatch = useDispatch();

  const initialValues = {newPassword: '', confirmNewPassword: ''};

  const [isHideNewPassword, setIsHideNewPassword] = useState(true);
  const [isHideConfirmPassword, setIsHideConfirmPassword] = useState(true);

  const [modalVisible, setModalVisible] = useState(false);
  const [notification, setNotification] = useState({
    isSuccess: false,
    message: '',
  });

  const validationSchema = Yup.object({
    newPassword: Yup.string()
      .required('Please enter your password.')
      .matches(uppercaseRegex, 'One uppercase is required.')
      .matches(lowercaseRegex, 'One lowercase is required.')
      .matches(numericRegex, 'One number is required.')
      .matches(specialCharsRegex, 'One special character is required.')
      .min(6, 'Minimum 6 characters required.'),
    confirmNewPassword: Yup.string()
      .required('Please enter your password again.')
      .oneOf([Yup.ref('newPassword')], 'Password does not match!'),
  });

  const onHandleSubmit = async values => {
    const loginData = {
      email: profileData.email,
      password: values.confirmNewPassword,
    };
    //kiểm tra mật khẩu cũ và mật khẩu mới có trùng không
    const checkPassword = await dispatch(checkLogin(loginData));
    if (checkPassword.payload.statusCode === 200) {
      setNotification({
        isSuccess: false,
        message: 'Please enter new password!',
      });
    } else {
      const newValues = {
        newPassword: values.confirmNewPassword,
        token: token,
      };
      const result = await dispatch(changePassword(newValues));
      if (
        result.payload.statusCode === 201 ||
        result.payload.statusCode === 200
      ) {
        setNotification({
          isSuccess: true,
          message: 'Change password successfully!',
        });
      }
    }
    setModalVisible(true);
  };
  return (
    <>
      <AppBarProduct idScreen={screens.change_password_screen} />
      <View style={{flex: 1, backgroundColor: COLORS.lightGray2}}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={values => onHandleSubmit(values)}>
          {props => (
            <View>
              {/* Password */}
              <View style={styles.marginHorizontal_Bottom16}>
                <Text style={styles.title}>New Password</Text>
                <View style={styles.input_container__input}>
                  <Image source={ICONS.password} style={styles.icon_size} />
                  <TextInput
                    secureTextEntry={isHideNewPassword}
                    placeholder={`New Password`}
                    onChangeText={props.handleChange('newPassword')}
                    onBlur={props.handleBlur('newPassword')}
                    value={props.values.newPassword}
                    placeholderTextColor={COLORS.darkGray}
                    style={[styles.input, styles.text_input]}
                  />
                  <TouchableOpacity
                    onPress={() => setIsHideNewPassword(!isHideNewPassword)}>
                    <Image
                      source={isHideNewPassword ? ICONS.hide : ICONS.show}
                      style={{width: 24, height: 24}}
                    />
                  </TouchableOpacity>
                </View>
                {props.touched.newPassword && props.errors.newPassword && (
                  <View style={globalStyles.validate_container}>
                    <FontAwesomeIcon
                      icon={faXmark}
                      color={COLORS.red}
                      size={24}
                      style={{marginLeft: 12}}
                    />
                    <Text style={styles.validate_container__text}>
                      {props.errors.newPassword}
                    </Text>
                  </View>
                )}
              </View>

              {/* Password Confirm */}
              <View style={styles.marginHorizontal_Bottom16}>
                <Text style={styles.title}>Confirm New Password</Text>
                <View style={styles.input_container__input}>
                  <Image source={ICONS.password} style={styles.icon_size} />

                  <TextInput
                    secureTextEntry={isHideConfirmPassword}
                    placeholder={`Confirm New Password`}
                    onChangeText={props.handleChange('confirmNewPassword')}
                    onBlur={props.handleBlur('confirmNewPassword')}
                    value={props.values.confirmNewPassword}
                    placeholderTextColor={COLORS.darkGray}
                    style={[styles.input, styles.text_input]}
                  />
                  <TouchableOpacity
                    onPress={() =>
                      setIsHideConfirmPassword(!isHideConfirmPassword)
                    }>
                    <Image
                      source={isHideConfirmPassword ? ICONS.hide : ICONS.show}
                      style={{width: 24, height: 24}}
                    />
                  </TouchableOpacity>
                </View>

                {props.touched.confirmNewPassword &&
                  props.errors.confirmNewPassword && (
                    <View style={globalStyles.validate_container}>
                      <FontAwesomeIcon
                        icon={faXmark}
                        color={COLORS.red}
                        size={24}
                        style={{marginLeft: 12}}
                      />
                      <Text style={styles.validate_container__text}>
                        {props.errors.confirmNewPassword}
                      </Text>
                    </View>
                  )}
              </View>

              {/* Button Confirm */}
              <View style={styles.btn_container}>
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
                    Confirmation
                  </Text>
                </TouchableOpacity>
              </View>

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
                    <TouchableOpacity
                      style={[globalStyles.button, globalStyles.buttonClose]}
                      onPress={() => setModalVisible(!modalVisible)}>
                      <Text style={globalStyles.textStyle}>OK</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </Modal>
            </View>
          )}
        </Formik>
      </View>
    </>
  );
}
