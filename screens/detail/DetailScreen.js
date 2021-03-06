import {
  View,
  Text,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
  Modal,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {COLORS, FONTS, SIZES} from '../../common/Theme';
import AppBarProduct from '../../common/AppBarProduct';
import {useDispatch, useSelector} from 'react-redux';
import {fetchProductDetails} from './DetailScreenThunk';
import RenderSizes from './components/RenderSizes';
import RenderRelatedProduct from './components/RenderRelatedProduct';
import {globalStyles} from '../../common/style/globalStyle';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCheck, faHeart, faXmark} from '@fortawesome/free-solid-svg-icons';
import {getLocalCart} from '../cart/CartScreenThunk';
import {onAddToCart} from './DetailScreenSlice';
import {getLocalWishList} from '../favorite/FavoriteScreenThunk';
import {
  onAddToWishList,
  onUpdateWishList,
} from '../favorite/FavoriteScreenSlice';

export default function DetailScreen({route}) {
  console.log('---------------');
  const {idScreen, nameScreen, idProduct} = route.params;

  //--------//
  const productDetails = useSelector(
    state => state.detailReducer.productDetails,
  );

  const wishlist = useSelector(state => state.favoriteReducer.wishlist);

  //lọc các sản phẩm trong wishlist có id === id product detail
  const checkLikeProduct = wishlist.findIndex(
    item => item.id === productDetails.id,
  );

  // const wishListByProductId = wishlist.filter(item => item.id === productDetails.id);

  const relatedProducts = useSelector(
    state => state.detailReducer.relatedProducts,
  );
  const currentSize = useSelector(state => state.detailReducer.sizeSelected);

  const cart = useSelector(state => state.cartReducer.cart);

  //--------//
  const [modalVisible, setModalVisible] = useState(false);

  const [isLike, setIsLike] = useState(false);
  console.log('isLike ', isLike);

  const [notification, setNotification] = useState({
    isSuccess: false,
    message: '',
  });

  const dispatch = useDispatch();

  const scrollRef = useRef();

  //--------//
  useEffect(() => {
    dispatch(fetchProductDetails(idProduct));
  }, [idProduct]);

  useEffect(() => {
    dispatch(getLocalCart());
    dispatch(getLocalWishList());
  });

  //--------//
  const renderSizes = item => {
    return (
      <RenderSizes
        item={item}
        wishlist={wishlist}
        setIsLike={setIsLike}
        idProduct={idProduct}
      />
    );
  };

  const renderRelatedProduct = item => {
    return <RenderRelatedProduct item={item} scrollRef={scrollRef} />;
  };

  /*  cart có item?
        true  -> trùng id item?
            false  -> trùng size?
                true  -> thông báo 'trùng size'
                false  -> thêm mới 1 item vào cart
            false  -> thêm mới item vào cart
        false  -> thêm mới item vào cart
   */
  const onPressAddToCart = () => {
    if (currentSize === '') {
      setModalVisible(true);
      setNotification({isSuccess: false, message: 'Please select a size'});
    } else {
      const item = {
        id: productDetails.id,
        image: productDetails.image,
        name: productDetails.name,
        price: productDetails.price,
        size: currentSize,
        qty: 1,
        totalPrice: productDetails.price * 1,
      };
      // existProductIndex
      const existProductIndex = cart.findIndex(
        item => item.id === productDetails.id,
      );
      const existSizeInProductIndex = cart.findIndex(
        item => item.size === currentSize && item.id === productDetails.id,
      );

      if (existProductIndex !== -1) {
        if (existSizeInProductIndex !== -1) {
          setModalVisible(true);
          setNotification({
            isSuccess: false,
            message: 'You cant change quantity in your cart!',
          });
        } else {
          setModalVisible(true);
          setNotification({
            isSuccess: true,
            message: 'Add to Cart Successfully!',
          });
          const newCart = [...cart, item];
          dispatch(onAddToCart(newCart));
        }
      } else {
        setModalVisible(true);
        setNotification({
          isSuccess: true,
          message: 'Add to Cart Successfully!',
        });
        const newCart = [...cart, item];
        dispatch(onAddToCart(newCart));
      }
    }
  };

  const onPressLike = () => {
    //đã like -> isLike true
    const newWishList = [...wishlist];
    if (isLike) {
      setIsLike(false);
      // const newWishList = wishlist.filter(
      //   (item, index) => item.id !== idProduct && currentSize === item.size,
      // );
      wishlist.forEach((wishlistItem, wishlistIndex) => {
        if (
          wishlistItem.id === idProduct &&
          wishlistItem.size === currentSize
        ) {
          newWishList.splice(wishlistIndex, 1);
          dispatch(onUpdateWishList(newWishList));
        }
      });
    } else {
      //chưa like -> isLike false
      if (currentSize === '') {
        setModalVisible(true);
        setNotification({isSuccess: false, message: 'Please select a size'});
      } else {
        const item = {
          id: productDetails.id,
          image: productDetails.image,
          name: productDetails.name,
          price: productDetails.price,
          size: currentSize,
          qty: 1,
          totalPrice: productDetails.price * 1,
        };
        // existProductIndex
        const existProductIndex = wishlist.findIndex(
          item => item.id === productDetails.id,
        );
        const existSizeInProductIndex = wishlist.findIndex(
          item => item.size === currentSize && item.id === productDetails.id,
        );

        if (existProductIndex !== -1) {
          if (existSizeInProductIndex !== -1) {
            setModalVisible(true);
            setNotification({
              isSuccess: false,
              message:
                'Already this product with the same size in your wishlist',
            });
          } else {
            setIsLike(!isLike);
            setModalVisible(true);
            setNotification({
              isSuccess: true,
              message: 'Add to Wishlist Successfully!',
            });
            const newWishList = [...wishlist, item];
            dispatch(onAddToWishList(newWishList));
          }
        } else {
          setIsLike(!isLike);
          setModalVisible(true);
          setNotification({
            isSuccess: true,
            message: 'Add to Wishlist Successfully!',
          });
          const newWishList = [...wishlist, item];
          dispatch(onAddToWishList(newWishList));
        }
      }
    }
  };

  return (
    <>
      <AppBarProduct idScreen={idScreen} idProduct={idProduct} />
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
                  marginBottom: 8,
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
            {/* Like */}
            <TouchableOpacity
              onPress={() => onPressLike()}
              style={{
                position: 'absolute',
                right: 0,
                top: 0,
                marginRight: 16,
                marginBottom: 16,
              }}>
              <FontAwesomeIcon
                icon={faHeart}
                size={32}
                color={isLike ? COLORS.secondary : COLORS.lightGray4}
              />
            </TouchableOpacity>
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
          </View>
        </View>
      </ScrollView>

      {/* Button add and price */}
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

        {/* button add to cart */}
        <TouchableOpacity
          onPress={() => onPressAddToCart()}
          style={{
            justifyContent: 'flex-end',
            marginVertical: 24,
          }}>
          <Text
            style={{
              textAlign: 'center',
              padding: 4,
              paddingTop: 8,
              borderRadius: 8,
              fontFamily: FONTS.fontFamilySemiBold,
              color: COLORS.secondary,
              fontSize: 18,
              backgroundColor: COLORS.black3,
              height: 48,
            }}>
            Add to Bag
          </Text>
        </TouchableOpacity>
      </View>

      {/* notification */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={globalStyles.centeredView}>
          <View
            style={[
              globalStyles.modalView,
              {
                backgroundColor: notification.isSuccess
                  ? COLORS.backgroundSuccess
                  : COLORS.backgroundError,
                borderColor: notification.isSuccess
                  ? COLORS.borderSuccess
                  : COLORS.borderError,
              },
            ]}>
            <View style={globalStyles.modalView_container}>
              <FontAwesomeIcon
                icon={notification.isSuccess ? faCheck : faXmark}
                color={notification.isSuccess ? COLORS.green : COLORS.red}
                size={24}
                style={{marginRight: 12}}
              />
              <Text style={globalStyles.modalText}>{notification.message}</Text>
            </View>

            <TouchableOpacity
              style={[globalStyles.button, globalStyles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={globalStyles.textStyle}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
}
