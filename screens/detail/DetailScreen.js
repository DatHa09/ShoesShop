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
import {COLORS} from '../../common/Theme';
import AppBarProduct from '../../common/AppBarProduct';
import {useDispatch, useSelector} from 'react-redux';
import {fetchProductDetails} from './DetailScreenThunk';
import RenderSizes from './components/RenderSizes';
import RenderRelatedProduct from './components/RenderRelatedProduct';
import {globalStyles} from '../../common/style/globalStyle';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCheck, faXmark} from '@fortawesome/free-solid-svg-icons';
import {getLocalCart} from '../cart/CartScreenThunk';
import {onAddToCart} from './DetailScreenSlice';
import {getLocalWishList} from '../favorite/FavoriteScreenThunk';
import {
  onAddToWishList,
  onUpdateWishList,
} from '../favorite/FavoriteScreenSlice';
import {ICONS} from '../../common/Images';
import {styles} from './style/DetailScreen';

export default function DetailScreen({route}) {
  const {idScreen, idProduct} = route.params;

  //--------//
  const productDetails = useSelector(
    state => state.detailReducer.productDetails,
  );

  const wishlist = useSelector(state => state.favoriteReducer.wishlist);

  const relatedProducts = useSelector(
    state => state.detailReducer.relatedProducts,
  );
  const currentSize = useSelector(state => state.detailReducer.sizeSelected);

  const cart = useSelector(state => state.cartReducer.cart);

  //--------//
  const [modalVisible, setModalVisible] = useState(false);

  const [isLike, setIsLike] = useState(false);

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
    return (
      <RenderRelatedProduct
        item={item}
        scrollRef={scrollRef}
        setIsLike={setIsLike}
      />
    );
  };

  const onPressAddToCart = () => {
    /**   cart có item?
          đúng -> trùng id item trong cart?
                  đúng -> có trùng size luôn ko?
                          đúng -> thông báo 'trùng size'
                          sai  -> thêm mới item vào cart
                  sai  -> thêm mới item vào cart
          sai -> thêm mới item vào cart
     */

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
      // tồn tại sản phẩm này trong cart?
      const existProductIndex = cart.findIndex(
        item => item.id === productDetails.id,
      );

      // tồn tại sản phẩm này với size này trong cart?
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
            message: 'Added to Cart Successfully!',
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
      wishlist.forEach((wishlistItem, wishlistIndex) => {
        if (
          wishlistItem.id === idProduct &&
          wishlistItem.size === currentSize
        ) {
          newWishList.splice(wishlistIndex, 1);
          dispatch(onUpdateWishList(newWishList));
        }
      });
      setModalVisible(true);
      setNotification({
        isSuccess: true,
        message: 'Deleted from wishlist successfully!',
      });
    } else {
      //chưa like -> isLike false
      if (currentSize === '') {
        // chưa chọn size -> chọn size
        setModalVisible(true);
        setNotification({isSuccess: false, message: 'Please select a size!'});
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

        setIsLike(!isLike);
        setModalVisible(true);
        setNotification({
          isSuccess: true,
          message: 'Add to Favorite Successfully!',
        });
        const newWishList = [...wishlist, item];
        dispatch(onAddToWishList(newWishList));
      }
    }
  };

  return (
    <>
      <AppBarProduct idScreen={idScreen} idProduct={idProduct} />
      <ScrollView style={styles.container} ref={scrollRef}>
        <View style={styles.container_info}>
          <View style={styles.container_info_image_container}>
            {/* Image */}
            <Image
              source={{uri: productDetails.image}}
              style={styles.container_info_image_container_image}
            />
            {/* Featured */}
            <View
              style={
                productDetails.feature &&
                styles.container_info_image_container_image_featured
              }>
              <Text
                style={
                  styles.container_info_image_container_image_featured__text
                }>
                {productDetails.feature ? 'Featured' : null}
              </Text>
            </View>
            {/* Like */}
            <TouchableOpacity
              onPress={() => onPressLike()}
              style={styles.container_info_image_container_image_like}>
              <Image
                source={isLike ? ICONS.fill_heart_red : ICONS.heart}
                style={styles.container_info_image_container_image_like__icon}
              />
            </TouchableOpacity>
          </View>

          {/* detail info */}
          <View style={styles.container_info_detail_info}>
            {/* product name */}
            <Text style={styles.container_info_detail_info__product_name}>
              {productDetails.name}
            </Text>

            {/* sizes */}
            <View style={styles.container_info_detail_info_size}>
              <Text style={styles.container_info_detail_info_size__title}>
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
                style={styles.container_info_detail_info_description__title}>
                Description
              </Text>
              <Text
                style={styles.container_info_detail_info_description__content}>
                {productDetails.description}
              </Text>
            </View>
            {/* Related Products */}
            <View>
              <Text
                style={
                  styles.container_info_detail_info__related_products_title
                }>
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
      <View style={styles.btn_buy_and_price_container}>
        {/* price info */}
        <View style={styles.price_info}>
          {/* total */}
          <Text style={styles.price_info__title}>Total</Text>
          {/* price */}
          <Text style={styles.price_info__content}>
            ${productDetails.price}
          </Text>
        </View>

        {/* button add to cart */}
        <TouchableOpacity
          onPress={() => onPressAddToCart()}
          style={styles.btn_buy}>
          <Text style={styles.btn_buy__title}>Add to Bag</Text>
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
