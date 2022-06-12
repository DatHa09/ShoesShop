import {
  View,
  Text,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {COLORS, FONTS, SIZES} from '../../common/Theme';
import AppBarProduct from '../../common/AppBarProduct';
import {useDispatch, useSelector} from 'react-redux';
import {fetchProductDetails} from './DetailScreenThunk';
import {onSizeSelected} from './DetailScreenSlice';
import {screens} from '../../common/Contants';
import {useNavigation} from '@react-navigation/native';
import RenderSizes from './components/RenderSizes';
import RenderRelatedProduct from './components/RenderRelatedProduct';

export default function DetailScreen({route}) {
  const {idScreen, nameScreen, idProduct} = route.params;
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const scrollRef = useRef();
  const productDetails = useSelector(
    state => state.detailReducer.productDetails,
  );
  const relatedProducts = useSelector(
    state => state.detailReducer.relatedProducts,
  );

  useEffect(() => {
    dispatch(fetchProductDetails(idProduct));
  }, [idProduct]);

  const renderSizes = item => {
    return <RenderSizes item={item} />;
  };

  const renderRelatedProduct = item => {
    return <RenderRelatedProduct item={item} scrollRef={scrollRef} />;
  };
  return (
    <>
      <AppBarProduct idScreen={idScreen} />
      <ScrollView style={{flex: 1}} ref={scrollRef}>
        <View style={{flex: 1, backgroundColor: COLORS.lightGray}}>
          <View style={{flex: 1, width: '100%'}}>
            {/* Image */}
            <Image
              source={{uri: productDetails.image}}
              style={{width: '100%', height: 272}}
            />
            {/* Featured */}
            <View
              style={
                productDetails.feature && {
                  position: 'absolute',
                  left: 0,
                  bottom: 0,
                  marginLeft: 16,
                  marginBottom: 16,
                  backgroundColor: COLORS.black3,
                  paddingHorizontal: 16,
                  paddingVertical: 8,
                  borderRadius: 99,
                }
              }>
              <Text
                style={{
                  fontFamily: FONTS.fontFamilyBold,
                  color: COLORS.secondary,
                }}>
                {productDetails.feature ? 'Featured' : null}
              </Text>
            </View>
          </View>

          {/* detail info */}
          <View
            style={{
              flex: 2,
              width: '100%',
              borderTopLeftRadius: 24,
              borderTopRightRadius: 24,
              backgroundColor: COLORS.white,
            }}>
            {/* product name */}
            <Text
              style={{
                fontFamily: FONTS.fontFamilyBold,
                color: COLORS.secondary,
                fontSize: 32,
                paddingLeft: 16,
                marginBottom: 16,
              }}>
              {productDetails.name}
            </Text>

            {/* sizes */}
            <View style={{marginBottom: 16}}>
              <Text
                style={{
                  fontFamily: FONTS.fontFamilySemiBold,
                  color: COLORS.black3,
                  fontSize: 24,
                  paddingLeft: 16,
                  marginBottom: 8,
                }}>
                Sizes
              </Text>
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                //data của size là dạng string nên ta chuyển về dạng JSON
                data={productDetails.size}
                renderItem={({item}) => renderSizes(item)}
                contentContainerStyle={{paddingHorizontal: 16}}
              />
            </View>
            {/* description */}
            <View>
              <Text
                style={{
                  fontFamily: FONTS.fontFamilySemiBold,
                  color: COLORS.black3,
                  fontSize: 24,
                  paddingLeft: 16,
                  marginBottom: 8,
                }}>
                Description
              </Text>
              <Text
                style={{
                  fontFamily: FONTS.fontFamilyRegular,
                  color: COLORS.black3,
                  fontSize: 16,
                  paddingLeft: 24,
                }}>
                {productDetails.description}
              </Text>
            </View>
            {/* Related Products */}
            <View>
              <Text
                style={{
                  fontFamily: FONTS.fontFamilySemiBold,
                  color: COLORS.black3,
                  fontSize: 24,
                  paddingLeft: 16,
                  marginBottom: 8,
                }}>
                Related Products
              </Text>
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={relatedProducts}
                renderItem={({item}) => renderRelatedProduct(item)}
                contentContainerStyle={{
                  paddingHorizontal: 16,
                  marginBottom: 16,
                }}
              />
            </View>
            {/* button add to cart */}
          </View>
        </View>
      </ScrollView>

      <View
        style={{
          height: 160,
          justifyContent: 'flex-end',
          backgroundColor: COLORS.lightGray,
          paddingHorizontal: 16,
        }}>
        {/* price info */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottomWidth: 1,
            borderBottomColor: COLORS.secondary,
          }}>
          {/* total */}
          <Text
            style={{
              fontFamily: FONTS.fontFamilySemiBold,
              color: COLORS.black3,
              fontSize: 24,
              marginBottom: 16,
              textAlign: 'center',
            }}>
            Total
          </Text>
          {/* price */}
          <Text
            style={{
              fontFamily: FONTS.fontFamilySemiBold,
              color: COLORS.black3,
              fontSize: 24,
              marginBottom: 16,
            }}>
            ${productDetails.price}
          </Text>
        </View>
        <TouchableOpacity
          style={{
            justifyContent: 'flex-end',
            marginVertical: 24,
          }}>
          <Text
            style={{
              textAlign: 'center',
              padding: 4,
              borderRadius: 8,
              fontFamily: FONTS.fontFamilySemiBold,
              color: COLORS.black3,
              fontSize: 24,
              backgroundColor: COLORS.secondary,
              height: 48,
            }}>
            Add to Bag
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
