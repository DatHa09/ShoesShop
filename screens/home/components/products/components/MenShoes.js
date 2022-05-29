import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import React, {useEffect} from 'react';
import {COLORS, FONTS, SIZES} from '../../../../../common/Theme';
import {ICONS} from '../../../../../common/Images';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHeart} from '@fortawesome/free-solid-svg-icons';
import {useDispatch, useSelector} from 'react-redux';
import {fetchProductsByMenShoes} from '../../../HomeThunk';

export default function MenShoes() {
  const dispatch = useDispatch();

  const dataProducts = useSelector(state => state.homeReducer.dataMenShoes);

  useEffect(() => {
    dispatch(fetchProductsByMenShoes());
  }, []);

  const renderMenShoes = item => {
    return (
      <TouchableOpacity
        style={{
          width: SIZES.width / 2 - 24,
          margin: 8,
          padding: 16,
          borderRadius: 5,
          backgroundColor: '#FFF',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        }}>
        {/* TAG and LIKE */}
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

  return (
    <View style={{flex: 1}}>
      <Text
        style={{
          paddingLeft: 16,
          color: COLORS.black3,
          fontSize: 24,
          fontFamily: FONTS.fontFamilyBold,
        }}>
        Men's Shoes
      </Text>
      <View style={{marginHorizontal: 8}}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={dataProducts}
          renderItem={({item}) => renderMenShoes(item)}
        />
      </View>
    </View>
  );
}
