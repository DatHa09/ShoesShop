import {createAsyncThunk} from '@reduxjs/toolkit';
import {KEY_LOCAL_WISHLIST} from '../../common/Contants';
import {getLocalStorage} from '../../common/LocalStorage';

export const getLocalWishList = createAsyncThunk(
  'wishlist/getLocalWishList',
  async () => {
    let wishlist = await getLocalStorage(KEY_LOCAL_WISHLIST);
    console.log('thunk.getLocalWishList');
    console.log(wishlist);
    if (wishlist === undefined || wishlist === null) {
      return [];
    } else {
      return wishlist;
    }
  },
);
