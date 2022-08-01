import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useEffect} from 'react';
import {COLORS, FONTS, SIZES} from '../../common/Theme';
import {fetchProducts, fetchProductsByBrand} from '../home/HomeThunk';
import {useDispatch, useSelector} from 'react-redux';
import StaggeredList from '@mindinventory/react-native-stagger-view';
import {screens} from '../../common/Contants';
import AppBarProduct from '../../common/AppBarProduct';
import {useNavigation} from '@react-navigation/native';
import {onSizeSelected} from '../detail/DetailScreenSlice';
import {styles} from './style/ProductsScreenStyle';

export default function ProductsScreen({route}) {
  const {idScreen, nameScreen, gender} = route.params;
  const params = {idScreen: idScreen, gender: gender};

  const dispatch = useDispatch();
  const navigation = useNavigation();
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

  const onselectProduct = item => {
    //set default value
    dispatch(onSizeSelected(''));

    navigation.navigate(screens.detail_screen, {
      idScreen: screens.detail_screen,
      nameScreen: item.name,
      idProduct: item.id,
    });
  };

  const renderItem = item => {
    return (
      <TouchableOpacity
        onPress={() => onselectProduct(item)}
        style={styles.container_item}>
        {/* TAG */}
        {item.feature ? (
          <View style={styles.container_item_tag}>
            <Text style={styles.container_item_tag__title}>Featured</Text>
          </View>
        ) : null}
        <Image
          resizeMode="contain"
          source={{uri: item.image}}
          style={styles.container_item_image}
        />
        <Text style={styles.container_item_name}>{item.name}</Text>
        <Text style={styles.container_item_short_description}>
          {item.shortDescription.trim()}
        </Text>
        <View style={styles.container_item_price}>
          <Text
            style={styles.container_item_price__content}>
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
      <AppBarProduct
        idScreen={idScreen}
        nameScreen={nameScreen}
        gender={gender}
      />
      {isLoading ? (
        <View style={styles.container_loading}>
          <Text style={styles.container_loading__text}>Loading...</Text>
        </View>
      ) : (
        <StaggeredList
          showsVerticalScrollIndicator={false}
          style={{padding: 8, paddingTop: 0}}
          data={confirmData()}
          animationType={'FADE_IN_FAST'}
          renderItem={({item}) => renderItem(item)}
        />
      )}
    </>
  );
}
