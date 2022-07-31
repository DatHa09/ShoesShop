import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {COLORS, FONTS} from '../../../common/Theme';
import moment from 'moment';
import 'moment/locale/en-gb';
import {ICONS} from '../../../common/Images';

export default function RenderHeader({section, onPressDeleteItem, index}) {
  const date = moment(section.date).format('LL');

  return (
    <>
      <View
        style={{
          flex: 1,
          marginTop: index === 0 ? 0 : 16,
          marginBottom: 2,
          paddingHorizontal: 16,
          paddingTop: 4,
          paddingBottom: 8,
          backgroundColor: COLORS.white,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        {/* content left */}
        <View>
          {/* date */}
          <Text
            style={{
              fontFamily: FONTS.fontFamilyBold,
              fontSize: 20,
              color: COLORS.black3,
            }}>
            {date}
          </Text>
          {/* orderId, status */}
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text
              style={{
                fontFamily: FONTS.fontFamilyBold,
                fontSize: 18,
                color: COLORS.secondary,
                marginRight: 8,
                paddingBottom: 4,
              }}>
              #{section.id}
            </Text>
            <Text
              style={{
                fontFamily: FONTS.fontFamilyBold,
                fontSize: 12,
                color: COLORS.black3,
                backgroundColor: COLORS.secondary,
                borderRadius: 99,

                paddingHorizontal: 8,
                paddingTop: 4,
                paddingBottom: 8,
              }}>
              Processing...
            </Text>
          </View>
        </View>

        {/* content right */}
        {/* delete */}
        <TouchableOpacity
          onPress={() => {
            onPressDeleteItem(section.id);
          }}>
          <Image
            source={ICONS.trash}
            style={{width: 24, height: 24, tintColor: COLORS.red}}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          backgroundColor: COLORS.white,
          paddingLeft: 16,
        }}>
        <Text
          style={{
            fontFamily: FONTS.fontFamilyBold,
            fontSize: 14,
            color: COLORS.secondary,
          }}>
          Paid by cash on delivery
        </Text>
      </View>
    </>
  );
}
