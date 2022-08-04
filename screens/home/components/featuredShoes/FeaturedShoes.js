import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {fetchProducts} from '../../HomeThunk';
import {onSizeSelected} from '../../../detail/DetailScreenSlice';
import {styles} from './style/FeaturedShoesStyle';
import {screens} from '../../../../common/Contants';

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

  const onSelectedItem = item => {
    //bỏ chọn size khi nhấn vào sản phẩm lần nữa hoặc các sản phẩm khác
    dispatch(onSizeSelected(''));

    navigation.navigate(screens.detail_screen, {
      idScreen: screens.detail_screen,
      idProduct: item.id,
    });
  };

  const renderFeaturedShoes = item => {
    return (
      <TouchableOpacity
        onPress={() => onSelectedItem(item)}
        style={styles.container_render_featured_shoes}>
        {/* tag featured*/}
        {item.feature ? (
          <View style={styles.container_render_featured_shoes_tag}>
            <Text style={styles.container_render_featured_shoes_tag__title}>
              Featured
            </Text>
          </View>
        ) : null}
        <Image
          resizeMode="contain"
          source={{uri: item.image}}
          style={styles.container_render_featured_shoes_image}
        />

        <Text style={styles.container_render_featured_shoes__name}>
          {item.name}
        </Text>
        <Text style={styles.container_render_featured_shoes__short_description}>
          {item.shortDescription.trim()}
        </Text>
        <View style={styles.container_render_featured_shoes_price}>
          <Text style={styles.container_render_featured_shoes_price__content}>
            ${item.price}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container_featured_shoes}>
      {/* title,
          see more...
      */}
      <View style={styles.container_featured_shoes_title}>
        <Text style={styles.container_featured_shoes_title__text}>
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
          <Text style={styles.btn_see_more}>See more...</Text>
        </TouchableOpacity>
      </View>

      {/* loading... */}
      <View style={styles.container_loading}>
        {isLoadingFeatured ? (
          <View>
            <Text style={styles.container_loading__title}>Loading...</Text>
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
