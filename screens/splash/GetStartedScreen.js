import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import {IMAGES} from '../../common/Images';
import {useDispatch, useSelector} from 'react-redux';
import {getLocalAccessToken} from '../login/LoginThunk';
import {StackActions, useNavigation} from '@react-navigation/native';
import {screens} from '../../common/Contants';
import {styles} from './style/GetStartedScreenStyle';

export default function GetStartedScreen() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const token = useSelector(state => state.loginReducer.accessToken);

  useEffect(() => {
    dispatch(getLocalAccessToken());
  });

  const onPressStarted = () => {
    if (token !== '') {
      navigation.dispatch(StackActions.replace(screens.bottom_tab_home));
    } else {
      navigation.dispatch(StackActions.replace(screens.login_screen));
    }
  };

  return (
    <ImageBackground source={IMAGES.splash} style={styles.container_image_bg}>
      {/* title */}
      <View style={styles.container_image_bg_title}>
        <Text style={styles.container_image_bg_title__text}>
          Find your{'\n'}Shoes
        </Text>
      </View>
      <View style={styles.container_image_bg_btn}>
        <TouchableOpacity onPress={() => onPressStarted()}>
          <Text style={styles.container_image_bg_btn__text}>Get started</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
