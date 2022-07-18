import {createAsyncThunk} from '@reduxjs/toolkit';
import {KEY_LOCAL_CART} from '../../common/Contants';
import {getLocalStorage} from '../../common/LocalStorage';

export const getLocalCart = createAsyncThunk('cart/getLocalCart', async () => {
  let cart = await getLocalStorage(KEY_LOCAL_CART);
  if (cart === undefined || cart === null) {
    return [];
  } else {
    return cart;
  }
});

export const checkoutOrder = createAsyncThunk(
  'order/checkoutOrder',
  async dataCheckout => {
    const resp = await fetch('https://shop.cyberlearn.vn/api/Users/order', {
      method: 'POST',
      headers: {
        // Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        orderDetail: dataCheckout.orderDetail,
        email: dataCheckout.email,
      }),
    });
    const json = await resp.json();
    return json;
  },
);
