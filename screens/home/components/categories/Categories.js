import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {COLORS, FONTS, SIZES} from '../../../../common/Theme';
import {useDispatch, useSelector} from 'react-redux';
import {onSelectedCategory} from '../../HomeSlice';
import {
  fetchCategoriesFirstTime,
  fetchCategoriesGender,
  fetchProducts,
} from '../../HomeThunk';
import {styles} from './style/CategoriesStyle';

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
          style={styles.container_categories_gender}>
          <Text
            style={[
              styles.container_categories_gender__title,
              {
                color:
                  item.id === currentCategory
                    ? COLORS.secondary
                    : COLORS.black3,
              },
            ]}>
            {item.category}
          </Text>
          {currentCategory === item.id && <View style={styles.under_line} />}
        </TouchableOpacity>
        {/* vách ngăn giữa MEN và WOMEN */}
        {!isEnd && (
          <View style={{justifyContent: 'center'}}>
            <View style={styles.line_right} />
          </View>
        )}
      </>
    );
  };
  return (
    <>
      {/* show categories */}
      <View style={styles.container_categories}>
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
