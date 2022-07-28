import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {styles} from './style/AppBarStyle';
import {COLORS, FONTS} from './Theme';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faMagnifyingGlass,
  faShoppingCart,
} from '@fortawesome/free-solid-svg-icons';
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
        onPress={() => navigation.navigate(screens.search_screen)}
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
          style={{height: 24, width: 24, tintColor: COLORS.secondary}}
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
          source={ICONS.buy}
          style={{height: 24, width: 24, tintColor: COLORS.secondary}}
        />
      </TouchableOpacity>
    </Animated.View>
  );
}
