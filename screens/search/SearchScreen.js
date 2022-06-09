import {View, Text} from 'react-native';
import React from 'react';
import {COLORS, FONTS} from '../../common/Theme';
import AppBarProduct from '../../common/AppBarProduct';
import {screens} from '../../common/Contants';

export default function SearchScreen() {
  return (
    <>
      <AppBarProduct idScreen={screens.search_screen} />
    </>
  );
}
