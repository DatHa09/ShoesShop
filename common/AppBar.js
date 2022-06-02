import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {styles} from './style/AppBarStyle';
import {COLORS, FONTS} from './Theme';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import {ICONS} from './Images';
import {useDispatch} from 'react-redux';
import {onSelectedMenu} from '../screens/home/HomeSlice';
import Animated, {EasingNode} from 'react-native-reanimated';
import {useNavigation} from '@react-navigation/native';
import {screens} from './Contants';

export default function AppBar() {
  const [showMenu, setShowMenu] = useState(false);

  const navigation = useNavigation();
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(onSelectedMenu(showMenu));

  //   Animated.timing(scaleValue, {
  //     toValue: showMenu ? 0.88 : 1,
  //     duration: 200,
  //     useNativeDriver: true,
  //     easing: EasingNode.ease,
  //   }).start();

  //   //Scaling the screen
  //   Animated.timing(offsetValue, {
  //     //your value...
  //     toValue: showMenu ? 248 : 0,
  //     duration: 200,
  //     useNativeDriver: true,
  //     easing: EasingNode.ease,
  //   }).start();
  // }, [showMenu]);

  const onShowMenu = () => {
    // setShowMenu(!showMenu);
    navigation.openDrawer();
    //Scaling the screen
  };
  return (
    <Animated.View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 56,
        paddingHorizontal: 16,
        marginTop: 8,
        marginBottom: 32,
        backgroundColor: COLORS.transparent,
      }}>
      {/* MENU */}
      <TouchableOpacity
        onPress={() => onShowMenu()}
        style={{
          backgroundColor: COLORS.black3,
          padding: 8,
          borderRadius: 32,
        }}>
        <Image
          source={ICONS.menu}
          style={{height: 24, width: 24, tintColor: COLORS.secondary}}
        />
      </TouchableOpacity>
      {/* SEARCH */}
      <TouchableOpacity
        onPress={() => navigation.navigate(screens.products, {nameScreen: screens.tab_search})}
        style={{
          flexDirection: 'row',
          flexGrow: 1,
          alignItems: 'center',
          paddingHorizontal: 16,
          marginHorizontal: 16,
          borderRadius: 99,
          height: 56,
          backgroundColor: COLORS.black3,
        }}>
        <Image
          source={ICONS.search}
          style={{
            height: 24,
            width: 24,
            tintColor: COLORS.secondary,
          }}
        />
        <Text
          style={{
            fontFamily: FONTS.fontFamilySemiBold,
            color: COLORS.lightGray,
            fontSize: 16,
            opacity: 0.6,
            paddingLeft: 8,
          }}>
          Search here...
        </Text>
        {/* <TextInput
          placeholder="Search here..."
          placeholderTextColor={COLORS.darkGray}
          style={{flexGrow: 1, color: COLORS.secondary}}
        /> */}
      </TouchableOpacity>
      {/* CART */}
      <TouchableOpacity
        onPress={() => navigation.navigate(screens.cart_screen)}
        style={{
          backgroundColor: COLORS.black3,
          padding: 8,
          borderRadius: 32,
        }}>
        <Image
          source={ICONS.cartBlack}
          style={{height: 24, width: 24, tintColor: COLORS.secondary}}
        />
      </TouchableOpacity>
    </Animated.View>
  );
}
