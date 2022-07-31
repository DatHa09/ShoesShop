import {View, Text, Image} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SIZES} from '../../../common/Theme';

export default function RenderOrder({orderItem}) {
  return (
    <View
      style={{
        marginTop: 2,
        flexDirection: 'row',
        backgroundColor: COLORS.white,
        paddingBottom: 4,
      }}>
      {/* image */}
      <Image
        source={{uri: orderItem.image}}
        style={{width: 100, height: 100}}
      />
      {/* name, short description */}
      <View style={{width: SIZES.width - 110, marginLeft: 8}}>
        <Text
          style={{
            fontFamily: FONTS.fontFamilyBold,
            color: COLORS.black3,
            fontSize: 16,
            marginTop: 4,
            marginBottom: 8,
          }}>
          {orderItem.name}
        </Text>
        <Text style={{color: COLORS.black3, fontSize: 16, paddingRight: 8}}>
          {orderItem.shortDescription.trim()}
        </Text>
      </View>
    </View>
  );
}
1;
