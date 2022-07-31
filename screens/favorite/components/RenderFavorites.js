import {View, Text, Image, TouchableOpacity, Alert} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCartPlus, faMinus, faPlus} from '@fortawesome/free-solid-svg-icons';
import {COLORS, FONTS, SIZES} from '../../../common/Theme';
import {screens} from '../../../common/Contants';
import {useNavigation} from '@react-navigation/native';
import Animated from 'react-native-reanimated';
import {Swipeable} from 'react-native-gesture-handler';
import {ICONS} from '../../../common/Images';
import {onUpdateCart} from '../../cart/CartScreenSlice';
import {useDispatch} from 'react-redux';
import {onSizeSelected} from '../../detail/DetailScreenSlice';

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
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          borderTopRightRadius: 24,
          borderBottomRightRadius: 24,
          marginVertical: 8,
          paddingHorizontal: 16,
          paddingBottom: 8,
          height: 100,
        }}>
        <Image
          source={ICONS.trash}
          style={{width: 24, height: 24, tintColor: COLORS.white}}
        />
        <Text style={{fontFamily: FONTS.fontFamilyMedium, color: COLORS.white}}>
          Delete
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <>
      {/* background overlay delete button */}
      <TouchableOpacity
        style={{
          borderRadius: 24,
          margin: 8,
          backgroundColor: COLORS.red,
          height: 100,
          position: 'absolute',
          width: SIZES.width - 24, //24 = margin(8) chính nó + margin(8) của RenderRight + margin(8) của FlatList
        }}
      />
      <Swipeable
        ref={swipeableRef}
        friction={2}
        // onSwipeableOpen={() => closeSwipeable()}
        renderRightActions={renderRight}>
        <Animated.View
          style={[
            {
              borderRadius: 24,
              borderColor: COLORS.secondary,
              // borderWidth: 1,
              // margin: 8,
              marginVertical: 8,
              paddingHorizontal: 8,
              backgroundColor: COLORS.white,
            },
            // animatedStyle,
          ]}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            {/* content left */}
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              {/* product image */}
              <TouchableOpacity onPress={() => onSelectedItem()}>
                <Image
                  source={{uri: item.image}}
                  style={{width: 100, height: 100}}
                />
              </TouchableOpacity>

              {/* product name, size */}
              <View style={{marginLeft: 8, width: 168}}>
                <Text
                  numberOfLines={1}
                  style={{
                    fontFamily: FONTS.fontFamilyBold,
                    color: COLORS.black3,
                  }}>
                  {item.name}
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 8,
                  }}>
                  <View
                    style={{
                      width: 64,
                      height: 32,
                      borderColor: COLORS.secondary,
                      borderWidth: 1,
                      // marginTop: 8,
                      paddingBottom: 4,
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: 16,
                    }}>
                    <Text
                      style={{
                        fontFamily: FONTS.fontFamilyBold,
                        color: COLORS.secondary,
                        fontSize: 14,
                      }}>
                      size {item.size}
                    </Text>
                  </View>

                  <Text
                    style={{
                      height: 32,
                      fontFamily: FONTS.fontFamilySemiBold,
                      color: COLORS.black3,
                      fontSize: 20,
                      paddingBottom: 8,
                      marginLeft: 8,
                    }}>
                    $
                    {item.price
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  </Text>
                </View>
              </View>
            </View>

            <TouchableOpacity
              onPress={() => onCheckItemInCart(item, setIsDisabled)}
              disabled={isDisabled}>
              {/* content right */}
              {/* <FontAwesomeIcon
                icon={faCartPlus}
                color={isDisabled ? COLORS.darkGray : COLORS.secondary}
                size={32}
                style={{paddingBottom: 8}}
              /> */}
              <Image
                source={
                  isDisabled
                    ? ICONS.fill_add_to_cart_dark_gray
                    : ICONS.fill_add_to_cart
                }
                style={{width: 32, height: 32}}
              />
            </TouchableOpacity>
          </View>
        </Animated.View>
      </Swipeable>
    </>
  );
}
