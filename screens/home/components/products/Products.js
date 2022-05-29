import {View} from 'react-native';
import React from 'react';
import MenShoes from './components/MenShoes';
import WomenShoes from './components/WomenShoes.';
import FeaturedShoes from './components/FeaturedShoes';

export default function Products() {
  return (
    <View style={{flex: 1, marginTop: 24}}>
      <MenShoes />
      <WomenShoes />
      <FeaturedShoes />
    </View>
  );
}
