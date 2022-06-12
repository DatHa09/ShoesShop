import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './style/RegisterFormStyle';
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
import {StackActions, useNavigation} from '@react-navigation/native';
import {
  lowercaseRegex,
  numericRegex,
  phoneRegex,
  screens,
  specialCharsRegex,
  uppercaseRegex,
} from '../../../common/Contants';
import {Picker} from '@react-native-picker/picker';
import {COLORS, FONTS} from '../../../common/Theme';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {useDispatch, useSelector} from 'react-redux';
import {checkRegister} from '../RegisterThunk';
import {globalStyles} from '../../../common/style/globalStyle';
import {ICONS} from '../../../common/Images';

export default function RegisterForm() {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = useState(false);

  const initialValues = {
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
    phone: '',
    gender: true,
  };

  const [isHideNewPassword, setIsHideNewPassword] = useState(true);
  const [isHideConfirmPassword, setIsHideConfirmPassword] = useState(true);

  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    console.log('isSuccess: ', isSuccess);
  }, [isSuccess]);

  const validationSchema = Yup.object({
    name: Yup.string().required('Please enter your name.').min(5, 'Too short.'),
    email: Yup.string()
      .required('Please enter your email address.')
      .email('Your email is not valid.'),
    password: Yup.string()
      .required('Please enter your password.')
      .matches(uppercaseRegex, 'One uppercase is required.')
      .matches(lowercaseRegex, 'One lowercase is required.')
      .matches(numericRegex, 'One number is required.')
      .matches(specialCharsRegex, 'One special character is required.')
      .min(6, 'Minimum 6 characters required.'),
    passwordConfirm: Yup.string()
      .required('Please enter your password again.')
      .oneOf([Yup.ref('password')], 'Password must be the same!'),
    phone: Yup.string()
      .required('Please enter your phone number.')
      .matches(phoneRegex, 'Your phone number not valid'),
  });

  const onHandleSubmit = async values => {
    const result = await dispatch(checkRegister(values));
    if (result.payload.statusCode === 400) {
      setIsSuccess(false);
    } else if (
      result.payload.statusCode === 201 ||
      result.payload.statusCode === 200
    ) {
      setIsSuccess(true);
    }
    setModalVisible(true);
  };

  const onConfirmRegister = () => {
    isSuccess
      ? navigation.dispatch(StackActions.replace(screens.login_screen))
      : setModalVisible(!modalVisible);
  };

  return (
    <View style={styles.input_container}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={values => onHandleSubmit(values)}>
        {props => (
          <View>
            {/* Name */}
            <View style={styles.marginVertical16}>
              <View style={styles.input_container__input}>
                <FontAwesomeIcon icon={faSignature} size={20} />
                <TextInput
                  placeholder={`Name`}
                  onChangeText={props.handleChange('name')}
                  onBlur={props.handleBlur('name')}
                  value={props.values.name}
                  placeholderTextColor="#fff"
                  style={[styles.input, styles.text_input]}
                />
              </View>
              {props.touched.name && props.errors.name && (
                <View style={globalStyles.validate_container}>
                  <FontAwesomeIcon
                    icon={faXmark}
                    color={COLORS.red}
                    size={24}
                    style={{marginLeft: 12}}
                  />
                  <Text style={globalStyles.validate_container__text}>
                    {props.errors.name}
                  </Text>
                </View>
              )}
            </View>

            {/* Email */}
            <View style={styles.marginVertical16}>
              <View style={styles.input_container__input}>
                <FontAwesomeIcon icon={faEnvelope} size={20} />
                <TextInput
                  placeholder={`Email`}
                  onChangeText={props.handleChange('email')}
                  onBlur={props.handleBlur('email')}
                  value={props.values.email}
                  placeholderTextColor="#fff"
                  style={[styles.input, styles.text_input]}
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
            </View>

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

            {/* Password Confirm */}
            <View style={styles.marginVertical16}>
              <View style={styles.input_container__input}>
                <FontAwesomeIcon icon={faUnlock} size={20} />

                <TextInput
                  secureTextEntry={isHideConfirmPassword}
                  placeholder={`Password Confirm`}
                  onChangeText={props.handleChange('passwordConfirm')}
                  onBlur={props.handleBlur('passwordConfirm')}
                  value={props.values.passwordConfirm}
                  placeholderTextColor="#FFF"
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

              {props.touched.passwordConfirm && props.errors.passwordConfirm && (
                <View style={globalStyles.validate_container}>
                  <FontAwesomeIcon
                    icon={faXmark}
                    color={COLORS.red}
                    size={24}
                    style={{marginLeft: 12}}
                  />
                  <Text style={globalStyles.validate_container__text}>
                    {props.errors.passwordConfirm}
                  </Text>
                </View>
              )}
            </View>

            {/* Phone */}
            <View style={styles.marginVertical16}>
              <View style={styles.input_container__input}>
                <FontAwesomeIcon icon={faPhone} size={20} />
                <TextInput
                  placeholder={`Phone`}
                  placeholderTextColor="#fff"
                  onChangeText={props.handleChange('phone')}
                  onBlur={props.handleBlur('phone')}
                  value={props.values.phone}
                  keyboardType="number-pad"
                  style={[styles.input, styles.text_input]}
                />
              </View>
              {props.touched.phone && props.errors.phone && (
                <View style={globalStyles.validate_container}>
                  <FontAwesomeIcon
                    icon={faXmark}
                    color={COLORS.red}
                    size={24}
                    style={{marginLeft: 12}}
                  />
                  <Text style={globalStyles.validate_container__text}>
                    {props.errors.phone}
                  </Text>
                </View>
              )}
            </View>

            {/* Gender */}
            <View style={[styles.gender, styles.marginVertical16]}>
              <FontAwesomeIcon icon={faVenusMars} size={20} />
              <Picker
                style={styles.genderPicker}
                selectedValue={props.values.gender ? 'male' : 'female'}
                onValueChange={(itemValue, itemIndex) => {
                  props.setFieldValue(
                    'gender',
                    itemValue === 'male' ? true : false,
                  );
                }}>
                <Picker.Item label="Male" value="male" />
                <Picker.Item label="Female" value="female" />
              </Picker>
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
              <View style={styles.centeredView}>
                <View
                  style={[
                    styles.modalView,
                    {
                      backgroundColor: isSuccess
                        ? COLORS.backgroundSuccess
                        : COLORS.backgroundError,
                      borderColor: isSuccess
                        ? COLORS.borderSuccess
                        : COLORS.borderError,
                    },
                  ]}>
                  <View style={styles.modalView_container}>
                    <FontAwesomeIcon
                      icon={isSuccess ? faCheck : faXmark}
                      color={isSuccess ? COLORS.green : COLORS.red}
                      size={24}
                      style={{marginRight: 12}}
                    />
                    <Text style={styles.modalText}>
                      {isSuccess
                        ? 'Register Successfully!'
                        : 'Email address is already registered!'}
                    </Text>
                  </View>
                  <TouchableOpacity
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => onConfirmRegister()}>
                    <Text style={styles.textStyle}>
                      {isSuccess ? 'Login Now' : 'OK'}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
          </View>
        )}
      </Formik>
    </View>
  );
}
