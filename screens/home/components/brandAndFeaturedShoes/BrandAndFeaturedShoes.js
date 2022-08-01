import {
  View,
  FlatList,
  TouchableOpacity,
  Text,
  Image,
  ImageBackground,
} from 'react-native';
import React from 'react';
import FeaturedShoes from './components/FeaturedShoes';
import {useSelector} from 'react-redux';
import {COLORS, FONTS, SIZES} from '../../../../common/Theme';
import {ICONS, IMAGES} from '../../../../common/Images';
import {useNavigation} from '@react-navigation/native';
import {categories, screens} from '../../../../common/Contants';
import {styles} from './style/BrandAndFeaturedShoesStyle';

export default function BrandAndFeaturedShoes() {
  const navigation = useNavigation();

  const dataBrand = useSelector(state => state.homeReducer.dataCategoriesBrand);

  const currentCategory = useSelector(
    state => state.homeReducer.categorySelected,
  );

  const renderBrandByGender = () => {
    return dataBrand.map((item, index) => {
      let isEnd = index === dataBrand.length - 1;
      return (
        <TouchableOpacity
          key={item.id}
          onPress={() =>
            navigation.navigate(screens.products, {
              idScreen: item.id,
              nameScreen: item.category,
              gender:
                currentCategory === categories.men
                  ? categories.men
                  : categories.women,
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
                  currentCategory === 'MEN' ? COLORS.secondary : COLORS.black3,
              },
            ]}
          />
        </TouchableOpacity>
      );
    });
  };
  return (
    <View>
      {/* 
        MenShoes
        WomenShoes
        Brand by Gender
      */}
      <Text style={styles.container_brand__title}>Shop by Brand</Text>
      {renderBrandByGender()}
      <FeaturedShoes />
    </View>
  );
}
