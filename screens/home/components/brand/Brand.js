import {View, Text} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {styles} from './style/BrandStyle';
import BrandByGender from './components/BrandByGender';

export default function Brand() {
  const dataBrand = useSelector(state => state.homeReducer.dataCategoriesBrand);

  const currentCategory = useSelector(
    state => state.homeReducer.categorySelected,
  );

  const renderBrandByGender = () => {
    return dataBrand.map((item, index) => {
      let isEnd = index === dataBrand.length - 1;
      return (
        <BrandByGender
          key={item.id + index}
          item={item}
          isEnd={isEnd}
          currentCategory={currentCategory}
        />
      );
    });
  };
  return (
    <View>
      {/* 
        MenShoes
        WomenShoes
        Brand by Gender
      */}
      <Text style={styles.container_brand__title}>Shop by Brand</Text>
      {renderBrandByGender()}
    </View>
  );
}
