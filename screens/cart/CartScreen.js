import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {COLORS, FONTS} from '../../common/Theme';
import {useDispatch, useSelector} from 'react-redux';
import {getLocalStorage} from '../../common/LocalStorage';
import {KEY_LOCAL_CART, screens} from '../../common/Contants';
import {getLocalCart} from './CartScreenThunk';
import AppBarProduct from '../../common/AppBarProduct';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faMinus, faPlus} from '@fortawesome/free-solid-svg-icons';
import RenderCart from './components/RenderCart';
import {onUpdateCart} from './CartScreenSlice';

export default function CartScreen() {
  const dispatch = useDispatch();

  const cart = useSelector(state => state.cartReducer.cart);

  // const totalReduce = cart =>
  //   cart.reduce((total, item) => total + item.price, 0);

  // let grandTotal = totalReduce(cart)
  const [totalPrice, setTotalPrice] = useState(0);
  console.log('totalReduce', totalPrice);

  useEffect(() => {
    console.log('cart: ', cart);
    dispatch(getLocalCart());
  });

  const updateCategory = (id, size, qty, price) => {
    console.log('updateCategory', id, size, qty, price);
    const newData = cart.map(item => {
      if (item.id === id && item.size === size) {
        // item.qty = qty;
        let newItem = {
          ...item,
          qty: qty,
          totalPrice: item.price * qty,
        };
        return newItem;
      }
      return item;
    });
    console.log('newData ', newData);
     dispatch(onUpdateCart(newData));
  };

  const renderProduct = item => {
    return (
      <RenderCart
        item={item}
        totalPrice={totalPrice}
        setTotalPrice={setTotalPrice}
        updateCategory={updateCategory}
      />
    );
  };

  return (
    <>
      <AppBarProduct idScreen={screens.cart_screen} />
      <View
        style={{
          flex: 1,
          // alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: COLORS.lightGray,
        }}>
        <View style={{flex: 3}}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={cart}
            renderItem={({item}) => renderProduct(item)}
            keyExtractor={(item, index) => index}
          />
        </View>

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
                fontSize: 20,
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
                fontSize: 20,
                marginBottom: 16,
              }}>
              ${totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            </Text>
          </View>
          {/* button add to cart */}
          <TouchableOpacity
            // onPress={() => onPressAddToCart()}
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
              Checkout
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
