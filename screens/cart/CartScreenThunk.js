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
