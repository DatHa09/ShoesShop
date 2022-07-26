import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {screens} from '../../../common/Contants';
import {COLORS, FONTS, SIZES} from '../../../common/Theme';
import { useDispatch } from 'react-redux';
import { onSizeSelected } from '../DetailScreenSlice';

export default function RenderRelatedProduct({item, scrollRef, setIsLike}) {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const onselectProduct = item => {
    //scrollTo Top
    scrollRef.current?.scrollTo({
      y: 0,
      animated: true,
    });

    //set default
    //setIsLike false
    //dispatch(onSizeSelected(''))
    setIsLike(false);
    dispatch(onSizeSelected(''));

    navigation.navigate(screens.detail_screen, {
      idScreen: screens.detail_screen,
      nameScreen: item.name,
      idProduct: item.id,
    });
  };

  return (
    <TouchableOpacity
      onPress={() => onselectProduct(item)}
      style={{
        width: SIZES.width / 2 - 24,
        margin: 8,
        padding: 16,
        borderRadius: 5,
        backgroundColor: COLORS.lightGray,
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
}
