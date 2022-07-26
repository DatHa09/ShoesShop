import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  Modal,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS, FONTS, SIZES} from './Theme';
import {ICONS} from './Images';
import {screens} from './Contants';
import {useNavigation} from '@react-navigation/native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHeart} from '@fortawesome/free-solid-svg-icons';
import {useDispatch} from 'react-redux';
import {fetchSearchProducts} from '../screens/search/SearchThunk';

export default function AppBarProduct({idScreen, nameScreen, gender}) {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const goBack = () => {
    return (
      <TouchableOpacity onPress={() => navigation.goBack()}>
        {/* <FontAwesomeIcon icon={faAngleLeft} color={COLORS.black3} size={32} /> */}
        <Image source={ICONS.goBack} style={{height: 32, width: 32}} />
      </TouchableOpacity>
    );
  };

  const onChange = text => {
    if (text.length >= 3) {
      dispatch(fetchSearchProducts(text));
    }
  };

  const capitalize = str => {
    //split the string into an array of strings
    //whenever a blank space is encountered
    const arr = str.toLowerCase().split(' ');
    //example: ['van','converse']

    const newArr = [];

    //loop through each element of the array and capitalize the first letter.
    arr.forEach(item => {
      item = item.charAt(0).toUpperCase() + item.slice(1);
      newArr.push(item);
    });
    //example: ['Van','Converse']

    //Join all the elements of the array back into a string
    //using a blankspace as a separator
    const newStr = newArr.join(' ');
    //example: 'Van Converse'

    return newStr;
  };

  const productAppBar = () => {
    return (
      <>
        <View
          style={{
            flexGrow: 1,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          {/* GoBack */}
          {goBack()}
          {/* Title */}
          <View style={{justifyContent: 'center', marginLeft: 16}}>
            <Text
              style={{
                fontFamily: FONTS.fontFamilyBold,
                color: COLORS.black3,
                fontSize: 16,
                paddingBottom: 4,
              }}>
              {idScreen === screens.feature_screen
                ? 'Featured Shoes'
                : `${capitalize(nameScreen)} For ${capitalize(gender)}`}
            </Text>
          </View>
        </View>
        <View
          style={{
            flexGrow: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}>
          {/* SEARCH */}
          <TouchableOpacity
            onPress={() => navigation.navigate(screens.search_screen)}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              height: 56,
            }}>
            <Image source={ICONS.search} style={{height: 24, width: 24}} />
          </TouchableOpacity>
          {/* CART */}
          <TouchableOpacity
            onPress={() => navigation.navigate(screens.cart_screen)}
            style={{marginLeft: 32}}>
            <Image source={ICONS.buy} style={{height: 24, width: 24}} />
          </TouchableOpacity>
        </View>
      </>
    );
  };

  const searchAppBar = () => {
    return (
      <View
        style={{
          flexGrow: 1,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        {/* GoBack */}
        {goBack()}

        {/* Title */}
        <View style={{justifyContent: 'center', marginLeft: 16}}>
          <TextInput
            onChangeText={text => onChange(text)}
            placeholder={'Enter at least 3 characters...'}
            placeholderTextColor={COLORS.darkGray}
            selectionColor={COLORS.black3}
            style={{
              flexGrow: 1,
              width: SIZES.width - 100,
              color: COLORS.black3,
            }}
          />
        </View>
      </View>
    );
  };

  const detailAppBar = () => {
    return (
      <>
        <View
          style={{
            flexGrow: 1,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          {/* GoBack */}
          {goBack()}
        </View>
        <View
          style={{
            flexGrow: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}>
          {/* CART */}
          <TouchableOpacity
            onPress={() => navigation.navigate(screens.cart_screen)}
            style={{marginLeft: 32}}>
            <Image source={ICONS.buy} style={{height: 24, width: 24}} />
          </TouchableOpacity>
        </View>
      </>
    );
  };

  const cartAppBar = () => {
    return (
      <>
        <View
          style={{
            flexGrow: 1,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          {/* GoBack */}
          {goBack()}
          {/* Title */}
          <View style={{justifyContent: 'center', marginLeft: 16}}>
            <Text
              style={{
                fontFamily: FONTS.fontFamilyBold,
                color: COLORS.black3,
                fontSize: 16,
                paddingBottom: 4,
              }}>
              Cart
            </Text>
          </View>
        </View>
      </>
    );
  };

  const wishListAppBar = () => {
    return (
      <>
        <View
          style={{
            flexGrow: 1,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          {/* GoBack */}
          {goBack()}
          {/* Title */}
          <View style={{justifyContent: 'center', marginLeft: 16}}>
            <Text
              style={{
                fontFamily: FONTS.fontFamilyBold,
                color: COLORS.black3,
                fontSize: 16,
                paddingBottom: 4,
              }}>
              Favorites
            </Text>
          </View>
        </View>
        <View
          style={{
            flexGrow: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}>
          {/* CART */}
          <TouchableOpacity
            onPress={() => navigation.navigate(screens.cart_screen)}
            style={{marginLeft: 32}}>
            <Image source={ICONS.buy} style={{height: 24, width: 24}} />
          </TouchableOpacity>
        </View>
      </>
    );
  };

  const appBar = () => {
    switch (idScreen) {
      case screens.search_screen:
        return searchAppBar();
      case screens.detail_screen:
        return detailAppBar();
      case screens.cart_screen:
        return cartAppBar();
      case screens.favorite_screen:
        return wishListAppBar();
      default:
        return productAppBar();
    }
  };
  // console.log('idScreen: ', idScreen);

  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 56,
          paddingHorizontal: 16,
          backgroundColor:
            idScreen === screens.detail_screen || screens.cart_screen
              ? COLORS.lightGray
              : COLORS.white,
        }}>
        {appBar()}
      </View>
    </>
  );
}
