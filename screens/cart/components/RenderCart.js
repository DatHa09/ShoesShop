import {View, Text, Image, TouchableOpacity, Alert} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faMinus, faPlus} from '@fortawesome/free-solid-svg-icons';
import {COLORS, FONTS, SIZES} from '../../../common/Theme';
import {screens} from '../../../common/Contants';
import {useNavigation} from '@react-navigation/native';
import Animated from 'react-native-reanimated';
import {Swipeable} from 'react-native-gesture-handler';
import {ICONS} from '../../../common/Images';
import {onSizeSelected} from '../../detail/DetailScreenSlice';
import {useDispatch} from 'react-redux';
import {styles} from '../style/CartScreenStyle';

export default function RenderCart({
  item,
  index,
  updateItemCart,
  onPressDeleteItem,
}) {
  //sử dụng reference để tránh swipeable vẫn active khi delete item

  const swipeableRef = useRef(null);

  const [quantity, setQuantity] = useState(item.qty);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    setQuantity(item.qty);
  }, [item.qty]);

  const onSelectedItem = () => {
    //set default value
    dispatch(onSizeSelected(''));

    navigation.navigate(screens.detail_screen, {
      idScreen: screens.detail_screen,
      nameScreen: item.name,
      idProduct: item.id,
    });
  };

  const onPressMinus = async () => {
    let newQuantity = quantity - 1;
    // nếu số lượng = 1 thì button - sẽ disable đi
    if (quantity === 1) {
      newQuantity = 1;
      setQuantity(1);
    } else {
      setQuantity(quantity - 1);
    }
    let price = quantity * item.price;
    updateItemCart(item.id, item.size, newQuantity, price);
  };

  const onPressPlus = () => {
    let newQuantity = quantity + 1;
    if (quantity === 5) {
      newQuantity = 5;
      setQuantity(5);
    } else {
      setQuantity(quantity + 1);
    }
    let price = quantity * item.price;
    updateItemCart(item.id, item.size, newQuantity, price);
  };

  const renderRight = () => {
    return (
      <TouchableOpacity
        onPress={() => {
          onPressDeleteItem(index);
          swipeableRef.current.close();
        }}
        style={styles.btn_delete_swipable}>
        <Image
          source={ICONS.trash}
          style={{width: 24, height: 24, tintColor: COLORS.white}}
        />
        <Text style={styles.btn_delete_swipable__text}>Delete</Text>
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
                  styles.container_swipable_content_left_info_size_container
                }>
                <Text
                  style={
                    styles.container_swipable_content_left_info_size_container__text
                  }>
                  size {item.size}
                </Text>
              </View>
            </View>
          </View>

          {/* content right */}
          {/* price, qty */}
          <View>
            <View style={styles.container_swipable_content_right}>
              <TouchableOpacity
                onPress={() => onPressMinus()}
                disabled={quantity === 1 ? true : false}
                style={{marginRight: 4}}>
                <FontAwesomeIcon
                  icon={faMinus}
                  size={20}
                  color={quantity === 1 ? COLORS.lightGray4 : COLORS.black3}
                />
              </TouchableOpacity>
              {/* qty */}
              <Text style={styles.container_swipable_content_right__qty}>
                {quantity}
              </Text>
              <TouchableOpacity
                onPress={() => onPressPlus()}
                disabled={quantity === 5 ? true : false}>
                <FontAwesomeIcon
                  icon={faPlus}
                  size={20}
                  color={quantity === 5 ? COLORS.lightGray4 : COLORS.black3}
                />
              </TouchableOpacity>
            </View>
            <Text style={styles.container_swipable_content_right__price}>
              $
              {(quantity * item.price)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            </Text>
          </View>
        </Animated.View>
      </Swipeable>
    </>
  );
}
