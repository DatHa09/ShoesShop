import {View, Text} from 'react-native';
import React, { useRef } from 'react';
import {COLORS, FONTS} from '../../common/Theme';
import AppBar from '../../common/AppBar';
import {useSelector} from 'react-redux';
import Animated from 'react-native-reanimated';

export default function ProfileScreen() {
  return (
    <View style={{flex: 1}}>
      <AppBar />
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text
          style={{
            fontFamily: FONTS.fontFamilySemiBold,
            color: COLORS.secondary,
            fontSize: 24,
          }}>
          ProfileScreen
        </Text>
      </View>
    </View>
  );
}
