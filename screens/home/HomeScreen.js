import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  ScrollView,
  Image,
} from 'react-native';
import React, {useEffect} from 'react';

//import app bar top
import AppBar from '../../common/AppBar';

//import theme
import {COLORS} from '../../common/Theme';
import {styles} from './style/HomeScreenStyle';
import {ICONS, IMAGES} from '../../common/Images';

//import component
import Products from './components/products/Products';
import Categories from './components/categories/Categories';
import ProductByCategory from './components/productByCategory/ProductByCategory';
export default function HomeScreen() {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        stickyHeaderIndices={[0]}>
        {/* HEADER */}
        <ImageBackground
          source={IMAGES.background7}
          style={{backgroundColor: COLORS.black3}}>
          <View
            style={{
              flex: 1,
              backgroundColor: 'rgba(0, 0, 0, 0.2)',
            }}>
            {/* APP BAR */}
            <AppBar />
            {/* TITLE */}
            <View style={styles.title_container}>
              <Text style={[styles.title_text, styles.title_text__secondary]}>
                SPECIAL
              </Text>
              <Text style={[styles.title_text, styles.title_text__white]}>
                COLLECTION
              </Text>
            </View>
          </View>
        </ImageBackground>

        {/* MAIN */}
        <View style={{backgroundColor: COLORS.white}}>
          {/* PRODUCTS */}
          <Products />

          {/* CATEGORIES */}
          <Categories />

          {/* PRODUCTS BY CATEGORY */}
          <ProductByCategory />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
