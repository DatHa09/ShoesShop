import {View, Text, ImageBackground, ScrollView} from 'react-native';
import React from 'react';

//import app bar top
import AppBar from '../../common/AppBar';

//import theme
import {styles} from './style/HomeScreenStyle';
import {IMAGES} from '../../common/Images';

//import component
import Categories from './components/categories/Categories';
import BrandAndFeaturedShoes from './components/brandAndFeaturedShoes/BrandAndFeaturedShoes';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        stickyHeaderIndices={[0]}>
        <ImageBackground
          source={IMAGES.background7}
          style={{
            flex: 1,
          }}>
          <View
            style={{
              flex: 1,
              backgroundColor: 'rgba(0, 0, 0, 0.2)',
            }}>
            {/* app bar */}
            <AppBar />

            {/* title */}
            <View style={styles.container_title}>
              <Text style={[styles.title_text, styles.title_text__secondary]}>
                SPECIAL
              </Text>
              <Text style={[styles.title_text, styles.title_text__white]}>
                COLLECTION
              </Text>
            </View>
          </View>
        </ImageBackground>

        {/* main */}
        <View style={{paddingVertical: 16}}>
          {/* categories */}
          <Categories />

          {/*brand &  featured shoes */}
          <BrandAndFeaturedShoes />
        </View>
      </ScrollView>
    </View>
  );
}
