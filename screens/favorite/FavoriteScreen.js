import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {COLORS, FONTS} from '../../common/Theme';
import {screens} from '../../common/Contants';
import AppBarProduct from '../../common/AppBarProduct';
import {globalStyles} from '../../common/style/globalStyle';
import {faCheck} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {IMAGES} from '../../common/Images';
import RenderFavorites from './components/RenderFavorites';
import {onUpdateWishList} from './FavoriteScreenSlice';
import {getLocalWishList} from './FavoriteScreenThunk';
import {getLocalCart} from '../cart/CartScreenThunk';
import {onUpdateCart} from '../cart/CartScreenSlice';

export default function FavoriteScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [notification, setNotification] = useState('');

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const wishList = useSelector(state => state.favoriteReducer.wishlist);
  const cart = useSelector(state => state.cartReducer.cart);
  const countChange = useSelector(state => state.favoriteReducer.count);
  useEffect(() => {
    dispatch(getLocalWishList());
    dispatch(getLocalCart());
  }, [countChange]);

  //còn bug ở đây
  const onPressAddToCart = (item, setIsDisabled) => {
    const newCart = [...cart];
    let cartItemQty = 0;
    let cartItemIndex = 0;
    cart.forEach((cartItem, cartIndex) => {
      if (cartItem.id === item.id && cartItem.size === item.size) {
        cartItemQty = cartItem.qty + 1;
        cartItemIndex = cartIndex;
      }
    });

    if (cartItemQty === 0) {
      setIsDisabled(false);
      newCart.push(item);
    }
    if ((cartItemQty >= 1) & (cartItemQty <= 4)) {
      setIsDisabled(false);
      const newItem = {
        id: item.id,
        image: item.image,
        name: item.name,
        price: item.price,
        qty: cartItemQty,
        size: item.size,
        totalPrice: item.totalPrice,
      };
      newCart.splice(cartItemIndex, 1, newItem);
    }
    if ((cartItemQty = 5)) {
      setIsDisabled(true);
    }
    console.log('~ cartItemQty', cartItemQty);
    console.log('~ cartItemIndex', cartItemIndex);
    console.log('newCart', newCart);
    dispatch(onUpdateCart(newCart));
  };

  const onPressAddAll = () => {
    console.log('onPressAddAll');
    // let isExist = false;
    // if (cart.length !== 0) {
    //   const newCart = [...cart];
    //   console.log('~ newCart', newCart.sort());
    //   const newWishList = [...wishList];
    //   console.log('~ newWishList', newWishList.sort());
    //   newCart.sort().forEach((cartItem, cartIndex) => {
    //     newWishList.sort().forEach(wishListItem => {
    //       if (
    // cartItem.id === wishListItem.id &&
    // cartItem.size === wishListItem.size
    //       ) {
    //         isExist = true;
    // const newItem = {
    //   id: cartItem.id,
    //   image: cartItem.image,
    //   name: cartItem.name,
    //   price: cartItem.price,
    //   qty: cartItem.qty + 1,
    //   size: cartItem.size,
    //   totalPrice: cartItem.totalPrice,
    // };
    // newCart.splice(cartIndex, 1, newItem);
    //       } else {
    //         newCart.push(wishListItem);
    //       }
    //       // if (
    //       // cartItem.id === wishListItem.id &&
    //       // cartItem.size === wishListItem.size
    //       // ) {
    //       //   console.log('have item wishlist in cart');
    //       // const newItem = {
    //       //   id: cartItem.id,
    //       //   image: cartItem.image,
    //       //   name: cartItem.name,
    //       //   price: cartItem.price,
    //       //   qty: cartItem.qty + 1,
    //       //   size: cartItem.size,
    //       //   totalPrice: cartItem.totalPrice
    //       // }
    //       //   cartItem.qty = cartItem.qty + 1;
    //       //   // console.log('cartItem: ', cartItem.id, cartItem.size, cartItem.qty)
    //       // } else {
    //       // newCart.push(wishListItem);
    //       // console.log('no item wishlist in cart');
    //       // }
    //     });
    //   });
    //   dispatch(onUpdateCart(newCart));
    //   // if (!isExist) {
    //   //   console.log('no item wishlist in cart');
    //   //   const newCart = [...cart, ...wishList];
    //   //   dispatch(onUpdateCart(newCart));
    //   //   console.log('newCart(cart != 0) ', newCart);
    //   // }
    // } else {
    //   const newCart = [...cart, ...wishList];
    //   dispatch(onUpdateCart(newCart));
    //   console.log('newCart(cart = 0) ', newCart);
    // }
    // setModalVisible(true);
    // setNotification('Added to cart successfully!');

    // setTimeout(() => {
    //   setModalVisible(false);
    // }, 1000);
  };

  const onPressDeleteItem = deleteItemIndex => {
    // console.log('onPressDeleteItem', deleteItemIndex);
    const newWishList = wishList.filter(
      (_, index) => index !== deleteItemIndex,
    );
    dispatch(onUpdateWishList(newWishList));
  };

  const renderProduct = (item, index) => {
    return (
      <RenderFavorites
        item={item}
        index={index}
        cart={cart}
        onPressDeleteItem={onPressDeleteItem}
        onPressAddToCart={onPressAddToCart}
      />
    );
  };

  const emptyWishList = () => {
    return (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginHorizontal: 16,
        }}>
        <Image source={IMAGES.not_found} />
        <Text
          style={{
            fontFamily: FONTS.fontFamilyBold,
            color: COLORS.black3,
            textAlign: 'center',
            fontSize: 24,
            marginBottom: 16,
          }}>
          There are no favorite yet.
        </Text>
        <Text
          style={{
            fontFamily: FONTS.fontFamilyMedium,
            color: COLORS.black3,
            textAlign: 'center',
            fontSize: 16,
          }}>
          Items added to your Favorites{'\n'} will be saved here.
        </Text>
      </View>
    );
  };
  return (
    <View style={{flex: 1}}>
      <AppBarProduct idScreen={screens.favorite_screen} />
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          backgroundColor: COLORS.lightGray,
        }}>
        <View style={{flex: 3}}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={wishList}
            ListEmptyComponent={() => emptyWishList()}
            renderItem={({item, index}) => renderProduct(item, index)}
            keyExtractor={(item, index) => index}
            contentContainerStyle={{marginHorizontal: 8}}
          />
        </View>
        {wishList.length === 0 ? (
          <TouchableOpacity
            onPress={() => navigation.navigate(screens.tab_home)} //screen default của drawer_menu là home screen
            style={{
              justifyContent: 'flex-end',
              marginVertical: 24,
              marginHorizontal: 16,
            }}>
            <Text
              style={{
                textAlign: 'center',
                padding: 4,
                paddingTop: 8,
                borderRadius: 8,
                fontFamily: FONTS.fontFamilySemiBold,
                color: COLORS.black3,
                fontSize: 18,
                backgroundColor: COLORS.secondary,
                height: 48,
              }}>
              Shopping now
            </Text>
          </TouchableOpacity>
        ) : (
          // Button add and price
          <View
            style={{
              justifyContent: 'flex-end',
              backgroundColor: COLORS.lightGray,
              paddingHorizontal: 16,
              borderTopWidth: 1,
              borderTopColor: COLORS.secondary,
            }}>
            {/* button add to cart */}
            <TouchableOpacity
              onPress={() => onPressAddAll()}
              style={{
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
                Add All To Cart
              </Text>
            </TouchableOpacity>
          </View>
        )}
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
          <View style={globalStyles.modalView}>
            <View style={globalStyles.modalView_container}>
              <FontAwesomeIcon
                icon={faCheck}
                color={COLORS.green}
                size={24}
                style={{marginRight: 12}}
              />
              <Text style={globalStyles.modalText}>{notification}</Text>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
