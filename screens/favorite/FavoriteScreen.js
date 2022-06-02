import {View, Text} from 'react-native';
import React from 'react';
import {COLORS, FONTS} from '../../common/Theme';
import AppBar from '../../common/AppBar';

export default function FavoriteScreen() {
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
        FavoriteScreen
      </Text>
    </View>
  </View>
  );
}
