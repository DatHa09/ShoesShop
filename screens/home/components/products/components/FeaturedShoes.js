import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchProducts} from '../../../HomeThunk';
import {COLORS, FONTS, SIZES} from '../../../../../common/Theme';
import {useNavigation} from '@react-navigation/native';
import {screens} from '../../../../../common/Contants';

export default function FeaturedShoes() {
  const dispatch = useDispatch();

  const navigation = useNavigation();

  const dataProducts = useSelector(state => state.homeReducer.dataProducts);

  const isLoadingFeatured = useSelector(
    state => state.homeReducer.isLoadingFeatured,
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  const featuredShoes = length => {
    let newDataProducts = [];
    let numberItem = 0;
    dataProducts.filter(item => {
      //lọc sản phẩm tiêu biểu với số lượng sản phẩm là length
      if (numberItem < length && item.feature === true) {
        numberItem = numberItem + 1;
        newDataProducts.push(item);
      }
    });
    return newDataProducts;
  };

  const renderFeaturedShoes = item => {
    return (
      <TouchableOpacity
        style={{
          width: SIZES.width / 2 - 24,
          margin: 8,
          padding: 16,
          borderRadius: 5,
          backgroundColor: '#FFF',
        }}>
        {/* TAG and LIKE */}
        {item.feature ? (
          <View
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              margin: 16,
              backgroundColor: COLORS.secondary,
              borderRadius: 8,
              padding: 4,
              alignItems: 'center',
              justifyContent: 'center',
              width: 80,
            }}>
            <Text
              style={{
                color: '#000',
                fontSize: 14,
                fontWeight: '500',
                fontFamily: FONTS.fontFamilyBold,
              }}>
              Featured
            </Text>
          </View>
        ) : null}
        <Image
          resizeMode="contain"
          source={{uri: item.image}}
          style={{width: '100%', height: 100, marginTop: 24}}
        />

        <Text
          style={{
            color: '#000',
            fontSize: 16,
            fontWeight: '500',
            fontFamily: FONTS.fontFamilyBold,
            marginBottom: 8,
          }}>
          {item.name}
        </Text>
        <Text
          style={{
            color: COLORS.black3,
            fontFamily: FONTS.fontFamilyRegular,
            fontSize: 14,
          }}>
          {item.shortDescription}
        </Text>
        <View
          style={{
            flexGrow: 1,
            justifyContent: 'flex-end',
            alignItems: 'center',
            width: 56,
          }}>
          <Text
            style={{
              padding: 8,
              borderRadius: 8,
              backgroundColor: COLORS.gray,
              color: COLORS.secondary,
              fontSize: 16,
              fontFamily: FONTS.fontFamilyRegular,
            }}>
            ${item.price}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{flex: 1, marginTop: 16}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 16,
        }}>
        <Text
          style={{
            color: COLORS.black3,
            fontSize: 24,
            fontFamily: FONTS.fontFamilyBold,
          }}>
          Featured Shoes
        </Text>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate(screens.products, {
              idScreen: screens.feature_screen,
              nameScreen: 'Featured Shoes',
              gender: '',
            })
          }>
          <Text
            style={{
              fontFamily: FONTS.fontFamilySemiBold,
              color: COLORS.darkGray,
              fontSize: 16,
            }}>
            See more...
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{marginHorizontal: 8}}>
        {isLoadingFeatured ? (
          <View>
            <Text
              style={{
                fontFamily: FONTS.fontFamilyBold,
                color: COLORS.black3,
                fontSize: 24,
              }}>
              Loading...
            </Text>
          </View>
        ) : (
          <FlatList
            horizontal
            initialNumToRender={4}
            showsHorizontalScrollIndicator={false}
            data={featuredShoes(4)}
            renderItem={({item}) => renderFeaturedShoes(item)}
          />
        )}
      </View>
    </View>
  );
}
