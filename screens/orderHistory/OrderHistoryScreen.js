import {View, Text} from 'react-native';
import React from 'react';
import AppBarProduct from '../../common/AppBarProduct';
import {screens} from '../../common/Contants';
import {COLORS} from '../../common/Theme';

export default function OrderHistoryScreen() {
  return (
    <>
      <AppBarProduct idScreen={screens.order_history_screen} />
      <View style={{flex: 1, backgroundColor: COLORS.lightGray2}}>
        <Text>OrderHistoryScreen</Text>
      </View>
    </>
  );
}
