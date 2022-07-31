import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';

//import app bar top
import AppBar from '../../common/AppBar';

//import theme
import {COLORS, FONTS} from '../../common/Theme';
import {styles} from './style/HomeScreenStyle';
import {ICONS, IMAGES} from '../../common/Images';

//import component
import Products from './components/products/Products';
import Categories from './components/categories/Categories';
import ProductByCategory from './components/productByCategory/ProductByCategory';
import Animated from 'react-native-reanimated';

export default function HomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.lightGray,
      }}>
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

        {/* main */}
        <View style={{paddingVertical: 16}}>
          {/* categories */}
          <Categories />

          {/*brand &  featured shoes */}
          <Products />

          {/* <ProductByCategory /> */}
        </View>
      </ScrollView>
    </View>
  );
}
