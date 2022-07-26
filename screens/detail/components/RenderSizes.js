import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS, FONTS} from '../../../common/Theme';
import {useDispatch, useSelector} from 'react-redux';
import {onSizeSelected} from '../DetailScreenSlice';

export default function RenderSizes({item, wishlist, setIsLike, idProduct}) {
  const currentSize = useSelector(state => state.detailReducer.sizeSelected);

  const dispatch = useDispatch();

  const onPressSize = () => {
    //nếu sp với size đang chọn, tồn tại trong wishlist => đã like sp 
    const existProductInWishList = wishlist.findIndex(
      (wishListItem, index) =>
        item === wishListItem.size && wishListItem.id === idProduct,
    );
    if (existProductInWishList !== -1) {
      setIsLike(true);
    } else {
      setIsLike(false);
    }
    dispatch(onSizeSelected(item));
  };
  return (
    <TouchableOpacity
      onPress={() => onPressSize()}
      style={[
        {
          width: 80,
          height: 48,
          backgroundColor: COLORS.lightGray,
          borderColor: COLORS.secondary,
          borderWidth: 1,
          margin: 8,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 16,
        },
        currentSize === item && {
          backgroundColor: COLORS.secondary,
        },
      ]}>
      <Text
        style={[
          {
            fontFamily: FONTS.fontFamilyBold,
            color: COLORS.secondary,
            fontSize: 16,
          },
          currentSize === item && {color: COLORS.black3},
        ]}>
        {item}
      </Text>
    </TouchableOpacity>
  );
}
