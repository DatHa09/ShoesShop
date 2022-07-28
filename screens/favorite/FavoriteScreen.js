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
import {faCheck, faXmark} from '@fortawesome/free-solid-svg-icons';
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
  const [notification, setNotification] = useState({
    isSuccess: false,
    message: '',
  });

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const wishList = useSelector(state => state.favoriteReducer.wishlist);
  const cart = useSelector(state => state.cartReducer.cart);

  //Với mỗi lần press delete thì sẽ get cart và wishlist
  const countFavoriteChange = useSelector(state => state.favoriteReducer.count);
  const countCartChange = useSelector(state => state.cartReducer.count);

  useEffect(() => {
    dispatch(getLocalWishList());
  }, [countFavoriteChange]);

  useEffect(() => {
    dispatch(getLocalCart());
  }, [countCartChange]);

  const onCheckItemInCart = (item, setIsDisabled) => {
    let isExist = false;
    // check item trong cart
    // cart empty
    if (cart.length === 0) {
      isExist = false;
      //ko tồn tại item trong cart
    } else {
      //cart có item

      //kiểm tra sp wishlist có trong cart ko
      const existFavoriteIndex = cart.findIndex(
        cartItem => cartItem.id === item.id && cartItem.size === item.size,
      );
      if (existFavoriteIndex !== -1) {
        isExist = true;
        setIsDisabled(true);
      } else {
        isExist = false;
        setIsDisabled(false);
      }
    }

    if (isExist) {
      setModalVisible(true);
      setNotification({
        isSuccess: false,
        message: 'This product is already in your cart!',
      });
      setTimeout(() => {
        setModalVisible(false);
      }, 1000);
    } else {
      const newCart = [...cart];
      newCart.push(item);
      dispatch(onUpdateCart(newCart));

      setIsDisabled(true);

      setModalVisible(true);
      setNotification({
        isSuccess: true,
        message: 'Added to Cart Successfully!',
      });

      setTimeout(() => {
        setModalVisible(false);
      }, 500);
    }
  };

  const onPressDeleteItem = deleteItemIndex => {
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
        onCheckItemInCart={onCheckItemInCart}
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
        <Image source={IMAGES.favorite_not_found} />
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
            }}></View>
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
          </View>
        </View>
      </Modal>
    </View>
  );
}
