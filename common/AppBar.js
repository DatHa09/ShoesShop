import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {COLORS, FONTS} from './Theme';
import {ICONS} from './Images';
import {useNavigation} from '@react-navigation/native';
import {screens} from './Contants';

export default function AppBar() {
  const navigation = useNavigation();

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 56,
        paddingRight: 16,
        marginTop: 8,
        marginBottom: 32,
        backgroundColor: COLORS.transparent,
      }}>
      {/* SEARCH */}
      <TouchableOpacity
        onPress={() => navigation.navigate(screens.search_screen)}
        style={{
          flexDirection: 'row',
          flexGrow: 1,
          alignItems: 'center',
          paddingHorizontal: 8,
          marginLeft: 16,
          marginRight: 8,
          borderRadius: 99,
          height: 48,
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
          height: 48,
          width: 48,
          alignItems: "center",
          justifyContent: "center"
        }}>
        <Image
          source={ICONS.buy}
          style={{height: 24, width: 24, tintColor: COLORS.secondary}}
        />
      </TouchableOpacity>
    </View>
  );
}
