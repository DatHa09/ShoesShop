import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {screens} from '../../../common/Contants';
import {useNavigation} from '@react-navigation/native';
import Animated from 'react-native-reanimated';
import {Swipeable} from 'react-native-gesture-handler';
import {ICONS} from '../../../common/Images';
import {useDispatch} from 'react-redux';
import {onSizeSelected} from '../../detail/DetailScreenSlice';
import {styles} from '../style/FavoriteScreenStyle';

export default function RenderFavorites({
  item,
  index,
  cart,
  onPressDeleteItem,
  onCheckItemInCart,
}) {
  //sử dụng reference để tránh swipeable vẫn active khi delete item
  const swipeableRef = useRef(null);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [isDisabled, setIsDisabled] = useState(false);

  const existFavoriteIndex = cart.findIndex(
    cartItem => cartItem.id === item.id && cartItem.size === item.size,
  );

  useEffect(() => {
    if (existFavoriteIndex !== -1) {
      setIsDisabled(true);
    } else setIsDisabled(false);
  }, [existFavoriteIndex]);

  const onSelectedItem = () => {
    //set default value
    dispatch(onSizeSelected(''));

    navigation.navigate(screens.detail_screen, {
      idScreen: screens.detail_screen,
      nameScreen: item.name,
      idProduct: item.id,
    });
  };

  const renderRight = () => {
    return (
      <TouchableOpacity
        onPress={() => {
          onPressDeleteItem(index);
          swipeableRef.current.close();
        }}
        style={styles.btn_delete_swipable}>
        <Image source={ICONS.trash} style={styles.btn_delete_swipable__image} />
        <Text style={styles.btn_delete_swipable__title}>Delete</Text>
      </TouchableOpacity>
    );
  };

  return (
    <>
      {/* background overlay delete button */}
      <TouchableOpacity style={styles.container__bg_overlay_delete_btn} />
      <Swipeable
        ref={swipeableRef}
        friction={2}
        renderRightActions={renderRight}>
        <Animated.View style={styles.container_swipable}>
          {/* content left */}
          <View style={styles.container_swipable_content_left}>
            {/* product image */}
            <TouchableOpacity onPress={() => onSelectedItem()}>
              <Image
                source={{uri: item.image}}
                style={styles.container_swipable_content_left__image}
              />
            </TouchableOpacity>

            {/* product name, size */}
            <View style={styles.container_swipable_content_left_info}>
              <Text
                numberOfLines={1}
                style={styles.container_swipable_content_left_info__name}>
                {item.name}
              </Text>
              <View
                style={
                  styles.container_swipable_content_left_info_size_and_price_container
                }>
                <View style={styles.size_container}>
                  <Text style={styles.size_container__text}>
                    size {item.size}
                  </Text>
                </View>

                <Text style={styles.price_text}>
                  ${item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                </Text>
              </View>
            </View>
          </View>

          <TouchableOpacity
            onPress={() => onCheckItemInCart(item, setIsDisabled)}
            disabled={isDisabled}>
            {/* content right */}
            <Image
              source={
                isDisabled
                  ? ICONS.fill_add_to_cart_dark_gray
                  : ICONS.fill_add_to_cart
              }
              style={styles.btn_add_to_cart}
            />
          </TouchableOpacity>
        </Animated.View>
      </Swipeable>
    </>
  );
}
