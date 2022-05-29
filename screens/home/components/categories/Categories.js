import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {COLORS, FONTS, SIZES} from '../../../../common/Theme';
import {useDispatch, useSelector} from 'react-redux';
import {onSelectedCategory} from '../../HomeSlice';
import {fetchCategories, fetchCategoriesFirstTime} from '../../HomeThunk';

export default function Categories() {
  const dispatch = useDispatch();

  const dataCategories = useSelector(state => state.homeReducer.dataCategories);

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
    dispatch(fetchCategories());
  }, [currentCategory]);

  const renderItem = (item, index) => {
    //C1
    // let isEnd = false;
    // if (index === categories.length - 1) {
    //   isEnd = true;
    // }
    //C2
    let isEnd = index === dataCategories.length - 1;
    return (
      <>
        <View
          style={{
            borderRadius: 8,
            borderBottomWidth: item.id === currentCategory ? 4 : 0,
            borderBottomColor: item.id === currentCategory && COLORS.secondary,
          }}>
          <TouchableOpacity
            onPress={() => dispatch(onSelectedCategory(item.id))}
            style={{
              height: 56,
              justifyContent: 'center',
              paddingHorizontal: 16,
            }}>
            <Text
              style={{
                color:
                  item.id === currentCategory
                    ? COLORS.secondary
                    : COLORS.black3,
                fontFamily: FONTS.fontFamilyBold,
                fontSize: 16,
              }}>
              {item.category}
            </Text>
          </TouchableOpacity>
        </View>
        {!isEnd && (
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <View
              style={{
                height: 24,
                width: 1,
                backgroundColor: COLORS.secondary,
              }}
            />
          </View>
        )}
      </>
    );
  };
  return (
    <View
      style={{
        height: 56,
        marginTop: 24,
      }}>
      {/* set background */}
      {/* show categories */}
      <View
        style={{
          position: 'absolute',
          height: 56,
          width: SIZES.width,
          opacity: 0.4,
        }}
      />
      <View
        style={{
          height: 56,
          width: SIZES.width,
          flexDirection: 'row',
        }}>
        <FlatList
          data={dataCategories}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => renderItem(item, index)}
        />
      </View>
    </View>
  );
}
