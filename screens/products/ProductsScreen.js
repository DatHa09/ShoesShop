import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useEffect} from 'react';
import {COLORS, FONTS, SIZES} from '../../common/Theme';
import {
  fetchProducts,
  fetchProductsByBrand,
} from '../home/HomeThunk';
import {useDispatch, useSelector} from 'react-redux';
import StaggeredList from '@mindinventory/react-native-stagger-view';
import {screens} from '../../common/Contants';
import AppBarProduct from '../../common/AppBarProduct';

export default function ProductsScreen({route}) {
  const {idScreen, nameScreen, gender} = route.params;
  const params = {idScreen: idScreen, gender: gender};

  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.homeReducer.isLoading);

  const dataMenShoes = useSelector(
    state => state.homeReducer.dataProductsByBrandAndMen,
  );
  const dataWomenShoes = useSelector(
    state => state.homeReducer.dataProductsByBrandAndWomen,
  );

  const dataProducts = useSelector(state => state.homeReducer.dataProducts);

  useEffect(() => {
    dispatch(fetchProductsByBrand(params));
    dispatch(fetchProducts());
  }, [idScreen || gender]);

  const renderItem = item => {
    return (
      <TouchableOpacity
        style={{
          width: SIZES.width / 2 - 24,
          margin: 8,
          padding: 16,
          borderRadius: 5,
          backgroundColor: '#FFF',
        }}>
        {/* TAG */}
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
              fontFamily: FONTS.fontFamilySemiBold,
            }}>
            ${item.price}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  const confirmData = () => {
    if (gender === 'MEN') {
      return dataMenShoes;
    } else if (gender === 'WOMEN') {
      return dataWomenShoes;
    } else if (gender === '' && idScreen === screens.feature_screen) {
      let newDataProducts = [];
      dataProducts.filter(item => {
        if (item.feature === true) {
          newDataProducts.push(item);
        }
      });
      return newDataProducts;
    }
  };

  return (
    <>
      <AppBarProduct idScreen={idScreen} nameScreen={nameScreen} />
      {isLoading ? (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
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
        <StaggeredList
          style={{padding: 8, paddingTop: 0}}
          data={confirmData()}
          animationType={'FADE_IN_FAST'}
          renderItem={({item}) => renderItem(item)}
        />
      )}
    </>
  );
}
