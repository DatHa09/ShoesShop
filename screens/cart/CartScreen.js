import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  Modal,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {COLORS} from '../../common/Theme';
import {useDispatch, useSelector} from 'react-redux';
import {screens} from '../../common/Contants';
import {checkoutOrder, getLocalCart} from './CartScreenThunk';
import AppBarProduct from '../../common/AppBarProduct';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCheck} from '@fortawesome/free-solid-svg-icons';
import RenderCart from './components/RenderCart';
import {onUpdateCart} from './CartScreenSlice';
import {IMAGES} from '../../common/Images';
import {useNavigation} from '@react-navigation/native';
import {globalStyles} from '../../common/style/globalStyle';
import {styles} from './style/CartScreenStyle';

export default function CartScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [notification, setNotification] = useState('');

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const cart = useSelector(state => state.cartReducer.cart) || [];
  const token = useSelector(state => state.loginReducer.accessToken);

  const countCartChange = useSelector(state => state.cartReducer.count);
  const profileData = useSelector(state => state.profileReducer.profile);

  useEffect(() => {
    dispatch(getLocalCart());
  }, [countCartChange]);

  const updateItemCart = (id, size, qty) => {
    const newData = cart.map(item => {
      if (item.id === id && item.size === size) {
        let newItem = {
          ...item,
          qty: qty,
          totalPrice: item.price * qty,
        };
        return newItem;
      }
      return item;
    });
    dispatch(onUpdateCart(newData));
  };

  const totalReduce = cart =>
    cart.reduce((total, item) => total + item.totalPrice, 0);

  const onPressCheckout = () => {
    //tạo data mới, có productId và quantity
    const newCart = [];
    cart.forEach((item, index) => {
      const data = {
        productId: item.id,
        quantity: item.qty,
      };
      newCart.push(data);
    });

    //thêm token vào để khi checkout, ta gọi luôn getProfile để update lại orderHistory
    const dataCheckout = {
      orderDetail: [...newCart],
      email: profileData.email,
      token: token,
    };

    // console.log(dataCheckout);
    dispatch(checkoutOrder(dataCheckout));

    setModalVisible(true);
    setNotification("Your order has been placed!\nWe'll contact to you soon!");
    //delete cart khi nhấn checkout
    dispatch(onUpdateCart([]));
    setTimeout(() => {
      setModalVisible(false);
    }, 2000);
  };

  const onPressDeleteItem = deleteItemIndex => {
    const newCart = cart.filter((_, index) => index !== deleteItemIndex);
    dispatch(onUpdateCart(newCart));
  };

  const renderProduct = (item, index) => {
    return (
      <RenderCart
        item={item}
        index={index}
        updateItemCart={updateItemCart}
        onPressDeleteItem={onPressDeleteItem}
      />
    );
  };

  const emptyCart = () => {
    return (
      <View style={styles.container_empty_cart}>
        <Image source={IMAGES.not_found} />
        <Text style={styles.container_empty_cart__title}>
          Your Bag is empty.
        </Text>
        <Text style={styles.container_empty_cart__text}>
          When you add products to cart,{'\n'}they'll appear here.
        </Text>
      </View>
    );
  };

  return (
    <>
      <AppBarProduct idScreen={screens.cart_screen} />
      <View style={styles.container}>
        <View style={{flex: 3}}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={cart}
            ListEmptyComponent={() => emptyCart()}
            renderItem={({item, index}) => renderProduct(item, index)}
            keyExtractor={(item, index) => index}
            contentContainerStyle={{marginHorizontal: 8}}
          />
        </View>
        {cart.length === 0 ? (
          <TouchableOpacity
            onPress={() => navigation.navigate(screens.home_screen)}
            style={styles.btn_shopping}>
            <Text style={styles.btn_shopping__text}>Shopping now</Text>
          </TouchableOpacity>
        ) : (
          // Button add and price
          <View style={styles.container_checkout}>
            {/* price info */}
            <View style={styles.container_checkout_price_info}>
              {/* total */}
              <Text style={styles.container_checkout_price_info__total}>
                Total
              </Text>
              {/* price */}
              <Text style={styles.container_checkout_price_info__price}>
                $
                {totalReduce(cart)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              </Text>
            </View>
            {/* button add to cart */}
            <TouchableOpacity
              onPress={() => onPressCheckout()}
              style={styles.btn_checkout}>
              <Text style={styles.btn_checkout__text}>Checkout</Text>
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
    </>
  );
}
