import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faMinus, faPlus} from '@fortawesome/free-solid-svg-icons';
import {COLORS, FONTS} from '../../../common/Theme';
import {screens} from '../../../common/Contants';
import {useNavigation} from '@react-navigation/native';

export default function RenderCart({item, updateItemCart}) {
  const [quantity, setQuantity] = useState(item.qty);
  const navigation = useNavigation();

  const onSelectedItem = () => {
    navigation.navigate(screens.detail_screen, {
      idScreen: screens.detail_screen,
      nameScreen: item.name,
      idProduct: item.id,
    });
  };

  const onPressMinus = async () => {
    let newQuantity = quantity - 1;
    if (quantity <= 1) {
      newQuantity = 1;
      setQuantity(1);
      let price = quantity * item.price;
      updateItemCart(item.id, item.size, newQuantity, price);
    } else {
      setQuantity(quantity - 1);
      let price = quantity * item.price;
      updateItemCart(item.id, item.size, newQuantity, price);
    }
  };

  const onPressPlus = () => {
    let newQuantity = quantity + 1;
    setQuantity(quantity + 1);
    let price = quantity * item.price;
    updateItemCart(item.id, item.size, newQuantity, price);
  };

  return (
    <View
      style={{
        borderRadius: 24,
        borderColor: COLORS.secondary,
        borderWidth: 1,
        margin: 8,
        paddingHorizontal: 8,
        backgroundColor: COLORS.white,
      }}>
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
                width: 64,
                height: 32,
                borderColor: COLORS.secondary,
                borderWidth: 1,
                marginTop: 8,
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
          </View>
        </View>

        {/* content right */}
        {/* price, qty */}
        <View style={{}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
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
            <Text
              style={{
                textAlign: 'center',
                marginRight: 4,
                color: COLORS.black3,
                fontSize: 24,
                fontFamily: FONTS.fontFamilyMedium,
                paddingBottom: 4,
                width: 32,
              }}>
              {quantity}
            </Text>
            <TouchableOpacity
              onPress={() => onPressPlus()}
              disabled={quantity === 30 ? true : false}>
              <FontAwesomeIcon
                icon={faPlus}
                size={20}
                color={quantity === 30 ? COLORS.lightGray4 : COLORS.black3}
              />
            </TouchableOpacity>
          </View>
          <Text
            style={{
              fontFamily: FONTS.fontFamilyBold,
              color: COLORS.black3,
              fontSize: 16,
              paddingBottom: 8,
            }}>
            $
            {(quantity * item.price)
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          </Text>
        </View>
      </View>
    </View>
  );
}
