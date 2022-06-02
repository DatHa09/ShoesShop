import {View, Text} from 'react-native';
import React from 'react';
import {COLORS, FONTS} from '../../common/Theme';

export default function ProductsScreen({route}) {
  const {nameScreen, gender} = route.params;
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text
        style={{
          fontFamily: FONTS.fontFamilyBold,
          color: COLORS.black3,
          fontSize: 24,
        }}>
        {gender}
      </Text>
      <Text
        style={{
          fontFamily: FONTS.fontFamilyBold,
          color: COLORS.black3,
          fontSize: 24,
        }}>
        {nameScreen}
      </Text>
    </View>
  );
}
