import {
  View,
  FlatList,
  TouchableOpacity,
  Text,
  Image,
  ImageBackground,
} from 'react-native';
import React from 'react';
import MenShoes from './components/MenShoes';
import WomenShoes from './components/WomenShoes.';
import FeaturedShoes from './components/FeaturedShoes';
import {useSelector} from 'react-redux';
import {COLORS, FONTS, SIZES} from '../../../../common/Theme';
import {ICONS, IMAGES} from '../../../../common/Images';
import {useNavigation} from '@react-navigation/native';
import {categories, screens} from '../../../../common/Contants';

export default function Products() {
  const navigation = useNavigation();

  const dataBrand = useSelector(state => state.homeReducer.dataCategoriesBrand);

  const currentCategory = useSelector(
    state => state.homeReducer.categorySelected,
  );
  return (
    <View>
      {/* <MenShoes />
      <WomenShoes /> */}
      <Text
        style={{
          fontFamily: FONTS.fontFamilyBold,
          color: COLORS.black3,
          fontSize: 24,
          paddingLeft: 16,
          paddingBottom: 8,
        }}>
        Shop by Brand
      </Text>
      {dataBrand.map((item, index) => {
        let isEnd = index === dataBrand.length - 1;
        return (
          <TouchableOpacity
            key={item.id}
            onPress={() =>
              navigation.navigate(screens.products, {
                nameScreen: item.id,
                gender:
                  currentCategory === categories.men
                    ? categories.men
                    : categories.women,
              })
            }
            style={{
              marginBottom: !isEnd ? 8 : 0,
              flexDirection: 'row',
              height: 104,
              width: SIZES.width,
              backgroundColor:
                currentCategory === categories.men
                  ? COLORS.black3
                  : COLORS.secondary,

              paddingHorizontal: 16,
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontFamily: FONTS.fontFamilyBold,
                fontSize: 20,
                color:
                  currentCategory === categories.men
                    ? COLORS.secondary
                    : COLORS.black3,
              }}>
              {item.category}
            </Text>
            <Image
              source={
                item.id === categories.nike
                  ? ICONS.nike
                  : item.id === categories.adidas
                  ? ICONS.adidas
                  : ICONS.van_converse
              }
              style={{
                height: 104,
                width: 104,
                tintColor:
                  currentCategory === 'MEN' ? COLORS.secondary : COLORS.black3,
              }}
            />
          </TouchableOpacity>
        );
      })}
      <FeaturedShoes />
      {/* <RelatedShoes/> */}
    </View>
  );
}
