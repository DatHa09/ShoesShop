import {View, Text} from 'react-native';
import React from 'react';
import AppBarProduct from '../../common/AppBarProduct';
import {screens} from '../../common/Contants';
import {COLORS} from '../../common/Theme';

export default function EditProfileScreen() {
  return (
    <>
      <AppBarProduct idScreen={screens.edit_profile_screen} />
      <View style={{flex: 1, backgroundColor: COLORS.lightGray2}}>
        <Text>EditProfileScreen</Text>
      </View>
    </>
  );
}
