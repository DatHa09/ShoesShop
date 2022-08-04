import {Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {categories, screens} from '../../../../../common/Contants';
import {COLORS} from '../../../../../common/Theme';
import {styles} from '../style/BrandStyle';
import {ICONS} from '../../../../../common/Images';
export default function RenderBrandByGender({item, isEnd, currentCategory}) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      key={item.id}
      onPress={() =>
        navigation.navigate(screens.products, {
          //idScreen: hiển thị appbar theo idScreen
          idScreen: item.id,
          //nameScreen: hiển thị nameScreen được custom trên appbar đã chọn theo idScreen
          nameScreen: item.category,
          //gender: lọc ra những sản phẩm theo giới tính
          gender: currentCategory,
        })
      }
      style={[
        styles.container_brand_name,
        {
          marginBottom: !isEnd ? 8 : 0,
          backgroundColor:
            currentCategory === categories.men
              ? COLORS.black3
              : COLORS.secondary,
        },
      ]}>
      {/* Brand name */}
      <Text
        style={[
          styles.container_brand_name__title,
          {
            color:
              currentCategory === categories.men
                ? COLORS.secondary
                : COLORS.black3,
          },
        ]}>
        {item.category}
      </Text>
      {/* Brand icon */}
      <Image
        source={
          item.id === categories.nike
            ? ICONS.nike
            : item.id === categories.adidas
            ? ICONS.adidas
            : ICONS.van_converse
        }
        style={[
          styles.container_brand__icon,
          {
            tintColor:
              currentCategory === categories.men
                ? COLORS.secondary
                : COLORS.black3,
          },
        ]}
      />
    </TouchableOpacity>
  );
}
