import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './style/AppBarStyle';
import {COLORS} from './Theme';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import {ICONS} from './Images';

export default function AppBar() {
  return (
    <View>
      <View
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
        <View
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
          <TextInput
            placeholder="Search here..."
            placeholderTextColor={COLORS.darkGray}
            style={{flexGrow: 1, color: COLORS.secondary}}
          />
        </View>
        {/* CART */}
        <TouchableOpacity
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
      </View>
    </View>
  );
}
