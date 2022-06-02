import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {COLORS, FONTS, SIZES} from '../../../../common/Theme';
import {useDispatch, useSelector} from 'react-redux';
import {onSelectedCategory} from '../../HomeSlice';
import {
  fetchCategories,
  fetchCategoriesFirstTime,
  fetchCategoriesGender,
  fetchProducts,
} from '../../HomeThunk';

export default function Categories() {
  const dispatch = useDispatch();

  const dataCategoriesGender = useSelector(
    state => state.homeReducer.dataCategoriesGender,
  );

  const currentCategory = useSelector(
    state => state.homeReducer.categorySelected,
  );

  const categorySelectedFirstTime = useSelector(
    state => state.homeReducer.categorySelectedFirstTime,
  );

  useEffect(() => {
    dispatch(fetchCategoriesFirstTime());
  }, [categorySelectedFirstTime]);

  useEffect(() => {
    dispatch(fetchCategoriesGender());
  }, [currentCategory]);

  useEffect(() => {
    dispatch(fetchProducts());
  });

  const renderItem = (item, index) => {
    //C1
    // let isEnd = false;
    // if (index === categories.length - 1) {
    //   isEnd = true;
    // }
    //C2
    let isEnd = index === dataCategoriesGender.length - 1;
    return (
      <>
        <TouchableOpacity
          onPress={() => dispatch(onSelectedCategory(item.id))}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            height: 56,
            width: SIZES.width / 2 - 16,
          }}>
          <Text
            style={{
              fontFamily: FONTS.fontFamilyBold,
              fontSize: 16,
              color:
                item.id === currentCategory ? COLORS.secondary : COLORS.black3,
            }}>
            {item.category}
          </Text>
          {currentCategory === item.id && (
            <View
              style={{
                position: 'absolute',
                bottom: 0,
                width: SIZES.width / 4,
                height: 3,
                backgroundColor: COLORS.secondary,
              }}
            />
          )}
        </TouchableOpacity>
        {!isEnd && (
          <View style={{justifyContent: 'center'}}>
            <View
              style={{
                height: 32,
                width: 1,
                backgroundColor: COLORS.black,
                borderRadius: 8,
              }}
            />
          </View>
        )}
      </>
    );
  };
  return (
    <>
      {/* show categories */}
      <View
        style={{
          heigh: 56,
          flexDirection: 'row',
          marginHorizontal: 16,
          marginBottom: 16,
          alignItems: 'center',
          borderRadius: 8,

          shadowColor: COLORS.black3,
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,

          elevation: 10,
          backgroundColor: COLORS.lightGray,
        }}>
        <FlatList
          data={dataCategoriesGender}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => renderItem(item, index)}
        />
      </View>
    </>
  );
}
