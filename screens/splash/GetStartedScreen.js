import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import {IMAGES} from '../../common/Images';
import {useDispatch, useSelector} from 'react-redux';
import {getLocalAccessToken} from '../login/LoginThunk';
import {StackActions, useNavigation} from '@react-navigation/native';
import {screens} from '../../common/Contants';
import {COLORS, FONTS, SIZES} from '../../common/Theme';

export default function GetStartedScreen() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const token = useSelector(state => state.loginReducer.accessToken);

  useEffect(() => {
    dispatch(getLocalAccessToken());
  });

  const onPressStarted = () => {
    if (token !== '') {
      navigation.dispatch(StackActions.replace(screens.drawer_menu));
    } else {
      navigation.dispatch(StackActions.replace(screens.login_screen));
    }
  };

  

  return (
    <ImageBackground
      source={IMAGES.splash}
      style={{flex: 1, justifyContent: 'flex-end', alignItems: 'center'}}>
      <View
        style={{
          flex: 1,
          marginTop: 56,
          width: SIZES.width - 56,
        }}>
        <Text
          style={{
            fontFamily: FONTS.fontFamilyBold,
            fontSize: 56,
            color: COLORS.secondary,
          }}>
          Find your
        </Text>
        <Text
          style={{
            fontFamily: FONTS.fontFamilyBold,
            fontSize: 56,
            color: COLORS.secondary,
          }}>
          Shoes
        </Text>
      </View>
      <View style={{flex: 3, justifyContent: 'flex-end'}}>
        <TouchableOpacity onPress={() => onPressStarted()}>
          <Text
            style={{
              borderRadius: 8,
              textAlign: 'center',
              fontFamily: FONTS.fontFamilyBold,
              fontSize: 20,
              color: COLORS.black3,
              backgroundColor: COLORS.secondary,
              padding: 16,
              marginBottom: 56,
              width: SIZES.width - 56,
            }}>
            Get started
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
