import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Modal,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import AppBarProduct from '../../common/AppBarProduct';
import {phoneRegex, screens} from '../../common/Contants';
import {Picker} from '@react-native-picker/picker';

import {Formik} from 'formik';
import * as Yup from 'yup';

import {globalStyles} from '../../common/style/globalStyle';
import {
  faCheck,
  faEnvelope,
  faPhone,
  faSignature,
  faVenusMars,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

import {COLORS, SIZES} from '../../common/Theme';
import {styles} from './style/EditProfileStyle';

import {useDispatch, useSelector} from 'react-redux';
import {editProfile, getProfile} from '../profile/profileScreenThunk';

export default function EditProfileScreen() {
  const profileData = useSelector(state => state.profileReducer.profile);
  const countProfile = useSelector(state => state.profileReducer.count);
  const token = useSelector(state => state.loginReducer.accessToken);

  const dispatch = useDispatch();

  const [modalVisible, setModalVisible] = useState(false);
  const [notification, setNotification] = useState({
    isSuccess: false,
    message: '',
  });

  useEffect(() => {
    getProfile(token);
  }, [countProfile]);

  const initialValues = {
    name: profileData.name,
    email: profileData.email,
    phone: profileData.phone,
    gender: profileData.gender,
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Please enter your name.').min(5, 'Too short.'),
    email: Yup.string()
      .required('Please enter your email address.')
      .email('Your email is not valid.'),
    phone: Yup.string()
      .required('Please enter your phone number.')
      .matches(phoneRegex, 'Your phone number not valid'),
  });

  const onHandleSubmit = async values => {
    const newValues = {
      ...values,
      password: '',
      token: token,
    };

    const result = await dispatch(editProfile(newValues));
    if (
      result.payload.statusCode === 201 ||
      result.payload.statusCode === 200
    ) {
      setNotification({
        isSuccess: true,
        message: 'Update profile successfully!',
      });
    }
    setModalVisible(true);
  };

  return (
    <>
      <AppBarProduct idScreen={screens.edit_profile_screen} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            backgroundColor: COLORS.lightGray2,
            height: SIZES.height - 91,
          }}>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={values => onHandleSubmit(values)}>
            {props => (
              <View>
                {/* Name */}
                <View style={styles.marginHorizontal_Bottom16}>
                  <Text style={styles.title}>Name</Text>
                  <View style={styles.input_container__input}>
                    <FontAwesomeIcon icon={faSignature} size={20} />
                    <TextInput
                      placeholder={`Name`}
                      onChangeText={props.handleChange('name')}
                      onBlur={props.handleBlur('name')}
                      value={props.values.name}
                      placeholderTextColor={COLORS.darkGray}
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
                <View style={styles.marginHorizontal_Bottom16}>
                  <Text style={styles.title}>Email Address</Text>
                  <View style={styles.input_container__input}>
                    <FontAwesomeIcon icon={faEnvelope} size={20} />
                    <TextInput
                      editable={false}
                      placeholder={`Email`}
                      onChangeText={props.handleChange('email')}
                      onBlur={props.handleBlur('email')}
                      value={props.values.email}
                      placeholderTextColor="#fff"
                      style={[
                        styles.input,
                        styles.text_input,
                        styles.editable_text_input,
                      ]}
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

                {/* Phone */}
                <View style={styles.marginHorizontal_Bottom16}>
                  <Text style={styles.title}>Phone Number</Text>
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
                <View style={styles.marginHorizontal_Bottom16}>
                  <Text style={styles.title}>Gender</Text>
                  <View style={styles.gender}>
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
      </ScrollView>
    </>
  );
}
