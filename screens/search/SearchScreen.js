import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SIZES} from '../../common/Theme';
import AppBarProduct from '../../common/AppBarProduct';
import {screens} from '../../common/Contants';
import {useDispatch, useSelector} from 'react-redux';
import StaggeredList from '@mindinventory/react-native-stagger-view';
import {IMAGES} from '../../common/Images';
import {useNavigation} from '@react-navigation/native';
import {styles} from './style/SearchScreenStyle';

export default function SearchScreen() {
  const dataSearch = useSelector(state => state.searchReducer.dataSearch);
  const navigation = useNavigation();
  const onSelectedItem = item => {
    navigation.navigate(screens.detail_screen, {
      idScreen: screens.detail_screen,
      nameScreen: item.name,
      idProduct: item.id,
    });
  };
  const renderItem = item => {
    return (
      <TouchableOpacity
        onPress={() => onSelectedItem(item)}
        style={styles.container}>
        {/* TAG */}
        {item.feature ? (
          <View style={styles.container_tag}>
            <Text style={styles.container_tag__title}>Featured</Text>
          </View>
        ) : null}
        {/* IMAGE */}
        <Image
          resizeMode="contain"
          source={{uri: item.image}}
          style={styles.container__image}
        />
        {/* NAME */}
        <Text style={styles.container__name_text}>{item.name}</Text>
        {/* SHORT DESCRIPTION */}
        <Text style={styles.container__short_description}>
          {item.shortDescription.trim()}
        </Text>
        {/* PRICE */}
        <View style={styles.container_price}>
          <Text style={styles.container_price_content}>${item.price}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const emptySearchedList = () => {
    return (
      <View style={styles.container_empty_search}>
        <Image source={IMAGES.not_found} />
        <Text style={styles.container_empty_search__title}>Item not found</Text>
        <Text style={styles.container_empty_search__text}>
          Try a more generic search term {'\n'}or try looking for alternative
          products.
        </Text>
      </View>
    );
  };
  return (
    <>
      <AppBarProduct idScreen={screens.search_screen} />
      <StaggeredList
        style={{padding: 8, paddingTop: 0, flex: 1, flexGrow: 1}}
        data={dataSearch}
        animationType={'SLIDE_DOWN'}
        ListEmptyComponent={() => emptySearchedList()}
        renderItem={({item}) => renderItem(item)}
      />
    </>
  );
}
