import {View, Text} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {COLORS, FONTS} from '../../common/Theme';
import AppBar from '../../common/AppBar';
import {useDispatch, useSelector} from 'react-redux';
import Animated from 'react-native-reanimated';
import {getLocalOrders} from './profileScreenThunk';

export default function ProfileScreen() {
  const orders = useSelector(state => state.profileReducer.orders);
  const profileData = useSelector(state => state.profileReducer.profile);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getLocalOrders());
  //   console.log('Orders ', orders);
  // }, [orders]);

  console.log(profileData.ordersHistory);

  return (
    <View style={{flex: 1}}>
      <AppBar />
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text
          style={{
            fontFamily: FONTS.fontFamilySemiBold,
            color: COLORS.secondary,
            fontSize: 24,
          }}>
          ProfileScreen
        </Text>
      </View>
    </View>
  );
}
