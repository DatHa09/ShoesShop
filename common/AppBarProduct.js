import {View, Text, TouchableOpacity, Image, TextInput} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SIZES} from './Theme';
import {ICONS} from './Images';
import {screens} from './Contants';
import {useNavigation} from '@react-navigation/native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faAngleLeft,
  faMagnifyingGlass,
  faShoppingCart,
} from '@fortawesome/free-solid-svg-icons';

export default function AppBarProduct({idScreen, nameScreen}) {
  const navigation = useNavigation();

  const goBack = () => {
    return (
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <FontAwesomeIcon icon={faAngleLeft} color={COLORS.black3} size={32} />
      </TouchableOpacity>
    );
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
                fontSize: 24,
                paddingBottom: 4,
              }}>
              {idScreen === screens.feature_screen
                ? 'Featured Shoes'
                : nameScreen}
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
              height: 56,
            }}>
            {/* <Image
              source={ICONS.search}
              style={{
                height: 24,
                width: 24,
                tintColor: COLORS.black3,
              }}
            /> */}
            <FontAwesomeIcon icon={faMagnifyingGlass} size={24} />
          </TouchableOpacity>
          {/* CART */}
          <TouchableOpacity
            onPress={() => navigation.navigate(screens.cart_screen)}
            style={{marginLeft: 32}}>
            <FontAwesomeIcon icon={faShoppingCart} size={24} />
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
            placeholder={'Search here...'}
            placeholderTextColor={COLORS.darkGray}
            selectionColor={COLORS.black3}
            style={{
              flexGrow: 1,
              // backgroundColor: COLORS.red,
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
          {/* Title */}
          <View style={{justifyContent: 'center', marginLeft: 16}}>
            <Text
              style={{
                fontFamily: FONTS.fontFamilyBold,
                color: COLORS.black3,
                fontSize: 24,
                paddingBottom: 4,
              }}>
              {idScreen === screens.feature_screen ? 'Detail Shoes' : idScreen}
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
            <FontAwesomeIcon icon={faShoppingCart} size={24} />
          </TouchableOpacity>
        </View>
      </>
    );
  };
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 56,
        paddingHorizontal: 16,
        backgroundColor: COLORS.white,
      }}>
      {idScreen === screens.search_screen ? searchAppBar() : productAppBar()}
    </View>
  );
}