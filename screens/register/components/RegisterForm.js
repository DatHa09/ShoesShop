import {View, Text, TextInput, TouchableOpacity, Button} from 'react-native';
import React, {useState} from 'react';
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
import {screens} from '../../../common/Contants';
import {Picker} from '@react-native-picker/picker';
import {COLORS, FONTS} from '../../../common/Theme';
import {Formik} from 'formik';
import * as Yup from 'yup';

export default function RegisterForm() {
  const navigation = useNavigation();

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

  // const [haveMinEightChars, setHaveMinEightChars] = useState(false);
  // const [haveUpperCase, setHaveUpperCase] = useState(false);
  // const [haveLowerCase, setHaveLowerCase] = useState(false);
  // const [haveOneNumber, setHaveOneNumber] = useState(false);
  // const [haveSpecialChars, setHaveSpecialChars] = useState(false);
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const uppercaseRegex = /(?=.*[A-Z])/;
  const lowercaseRegex = /(?=.*[a-z])/;
  const numericRegex = /(?=.*[0-9])/;
  const specialCharsRegex = /(?=.*[!\@\#\$\%\^\&\*\(\)\_\-\=\+\?\>\<\.\,])/;
  const phoneRegex = /((09|03|07|08|05)+([0-9]{8})\b)/g;

  const validationSchema = Yup.object({
    name: Yup.string().required('Please enter your name.').min(5, 'Too short.'),
    email: Yup.string()
      .required('Please enter your email address.')
      .email('Your email not valid.'),
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

  // const hintValidatePassword = () => (
  //   <View style={styles.minimum_requirements}>

  //     <View style={styles.minimum_requirements_characters_container}>
  //       <Text
  //         style={[
  //           styles.characters_container__text,
  //           {color: haveMinEightChars ? COLORS.green : COLORS.white},
  //         ]}>
  //         Minimum of 8 characters
  //       </Text>
  //       {haveMinEightChars ? (
  //         <FontAwesomeIcon
  //           icon={faCheck}
  //           color={COLORS.green}
  //           style={{marginLeft: 4, marginRight: 8}}
  //         />
  //       ) : (
  //         <FontAwesomeIcon
  //           icon={faXmark}
  //           color={COLORS.red}
  //           style={{marginLeft: 4, marginRight: 8}}
  //         />
  //       )}
  //     </View>

  //     <View style={styles.minimum_requirements_characters_container}>
  //       <Text
  //         style={[
  //           styles.characters_container__text,
  //           {color: haveUpperCase ? COLORS.green : COLORS.white},
  //         ]}>
  //         1 uppercase letter
  //       </Text>
  //       {haveUpperCase ? (
  //         <FontAwesomeIcon
  //           icon={faCheck}
  //           color={COLORS.green}
  //           style={{marginLeft: 4, marginRight: 8}}
  //         />
  //       ) : (
  //         <FontAwesomeIcon
  //           icon={faXmark}
  //           color={COLORS.red}
  //           style={{marginLeft: 4, marginRight: 8}}
  //         />
  //       )}
  //     </View>

  //     <View style={styles.minimum_requirements_characters_container}>
  //       <Text
  //         style={[
  //           styles.characters_container__text,
  //           {color: haveLowerCase ? COLORS.green : COLORS.white},
  //         ]}>
  //         1 lowercase letter
  //       </Text>
  //       {haveLowerCase ? (
  //         <FontAwesomeIcon
  //           icon={faCheck}
  //           color={COLORS.green}
  //           style={{marginLeft: 4, marginRight: 8}}
  //         />
  //       ) : (
  //         <FontAwesomeIcon
  //           icon={faXmark}
  //           color={COLORS.red}
  //           style={{marginLeft: 4, marginRight: 8}}
  //         />
  //       )}
  //     </View>

  //     <View style={styles.minimum_requirements_characters_container}>
  //       <Text
  //         style={[
  //           styles.characters_container__text,
  //           {color: haveOneNumber ? COLORS.green : COLORS.white},
  //         ]}>
  //         1 number
  //       </Text>
  //       {haveOneNumber ? (
  // <FontAwesomeIcon
  //   icon={faCheck}
  //   color={COLORS.green}
  //   style={{marginLeft: 4, marginRight: 8}}
  // />
  //       ) : (
  //         <FontAwesomeIcon
  //           icon={faXmark}
  //           color={COLORS.red}
  //           style={{marginLeft: 4, marginRight: 8}}
  //         />
  //       )}
  //     </View>

  //     <View style={styles.minimum_requirements_characters_container}>
  //       <Text
  //         style={[
  //           styles.characters_container__text,
  //           {color: haveSpecialChars ? COLORS.green : COLORS.white},
  //         ]}>
  //         1 special character
  //       </Text>
  //       {haveSpecialChars ? (
  //         <FontAwesomeIcon
  //           icon={faCheck}
  //           color={COLORS.green}
  //           style={{marginLeft: 4, marginRight: 8}}
  //         />
  //       ) : (
  //         <FontAwesomeIcon
  //           icon={faXmark}
  //           color={COLORS.red}
  //           style={{marginLeft: 4, marginRight: 8}}
  //         />
  //       )}
  //     </View>
  //   </View>
  // );

  return (
    <View style={styles.input_container}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={values => console.log(values)}>
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
                <View style={styles.validate_container}>
                  <FontAwesomeIcon
                    icon={faXmark}
                    color={COLORS.red}
                    size={24}
                    style={{marginLeft: 12}}
                  />
                  <Text style={styles.validate_container__text}>
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
                <View style={styles.validate_container}>
                  <FontAwesomeIcon
                    icon={faXmark}
                    color={COLORS.red}
                    size={24}
                    style={{marginLeft: 12}}
                  />
                  <Text style={styles.validate_container__text}>
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
                  <FontAwesomeIcon
                    icon={isHideNewPassword ? faEyeSlash : faEye}
                    style={{flexGrow: 1}}
                  />
                </TouchableOpacity>
              </View>
              {props.touched.password && props.errors.password && (
                <View style={styles.validate_container}>
                  <FontAwesomeIcon
                    icon={faXmark}
                    color={COLORS.red}
                    size={24}
                    style={{marginLeft: 12}}
                  />
                  <Text style={styles.validate_container__text}>
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
                  <FontAwesomeIcon
                    icon={isHideConfirmPassword ? faEyeSlash : faEye}
                  />
                </TouchableOpacity>
              </View>

              {props.touched.passwordConfirm && props.errors.passwordConfirm && (
                <View style={styles.validate_container}>
                  <FontAwesomeIcon
                    icon={faXmark}
                    color={COLORS.red}
                    size={24}
                    style={{marginLeft: 12}}
                  />
                  <Text style={styles.validate_container__text}>
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
                <View style={styles.validate_container}>
                  <FontAwesomeIcon
                    icon={faXmark}
                    color={COLORS.red}
                    size={24}
                    style={{marginLeft: 12}}
                  />
                  <Text style={styles.validate_container__text}>
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
                  // setFieldValue('gender', itemValue);
                  // setFieldData({
                  //   ...fieldData,
                  //   gender: itemValue,
                  // });
                }}>
                <Picker.Item label="Select gender" />
                <Picker.Item label="Male" value="male" />
                <Picker.Item label="Female" value="female" />
              </Picker>
            </View>
            {/* Button Confirm */}
            <View style={styles.btn_container}>
              <TouchableOpacity
                disabled={!props.dirty || !props.isValid}
                onPress={
                  () => props.handleSubmit()
                  // navigation.dispatch(
                  //   StackActions.replace(screens.login_screen),
                  // )
                }
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
          </View>
        )}
      </Formik>
    </View>
  );
}
