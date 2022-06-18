import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SIZES} from '../../common/Theme';
import AppBarProduct from '../../common/AppBarProduct';
import {screens} from '../../common/Contants';
import {useDispatch, useSelector} from 'react-redux';
import StaggeredList from '@mindinventory/react-native-stagger-view';
import {IMAGES} from '../../common/Images';
import {useNavigation} from '@react-navigation/native';

export default function SearchScreen() {
  const dataSearch = useSelector(state => state.searchReducer.dataSearch);
  const navigation = useNavigation();
  const onSelectedItem = item => {
    navigation.navigate(screens.detail_screen, {
      idScreen: screens.detail_screen,
      nameScreen: item.name,
      idProduct: item.id,
    });
  };
  const renderItem = item => {
    return (
      <TouchableOpacity
        onPress={() => onSelectedItem(item)}
        style={{
          width: SIZES.width / 2 - 24,
          margin: 8,
          padding: 16,
          borderRadius: 5,
          backgroundColor: '#FFF',
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
  };

  const emptySearchedList = () => {
    return (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginHorizontal: 16,
        }}>
        <Image source={IMAGES.not_found} />
        <Text
          style={{
            fontFamily: FONTS.fontFamilyBold,
            color: COLORS.black3,
            textAlign: 'center',
            fontSize: 24,
            marginBottom: 16,
          }}>
          Item not found
        </Text>
        <Text
          style={{
            fontFamily: FONTS.fontFamilyMedium,
            color: COLORS.black3,
            textAlign: 'center',
            fontSize: 16,
          }}>
          Try a more generic search term or try looking for alternative
          products.
        </Text>
      </View>
    );
  };
  return (
    <>
      <AppBarProduct idScreen={screens.search_screen} />
      <StaggeredList
        style={{padding: 8, paddingTop: 0, flex: 1, flexGrow: 1}}
        data={dataSearch}
        animationType={'SLIDE_DOWN'}
        ListEmptyComponent={() => emptySearchedList()}
        renderItem={({item}) => renderItem(item)}
      />
    </>
  );
}
