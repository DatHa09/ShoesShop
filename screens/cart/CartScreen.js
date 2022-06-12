import {View, Text} from 'react-native';
import React from 'react';
import {COLORS, FONTS} from '../../common/Theme';

export default function CartScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:COLORS.white}}>
      <Text
        style={{
          fontFamily: FONTS.fontFamilySemiBold,
          color: COLORS.black3,
          fontSize: 24,
        }}>
        CartScreen
      </Text>
    </View>
  );
}
