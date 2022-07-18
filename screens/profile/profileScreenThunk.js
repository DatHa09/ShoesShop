import {createAsyncThunk} from '@reduxjs/toolkit';
import {KEY_LOCAL_ORDERS} from '../../common/Contants';
import {getLocalStorage} from '../../common/LocalStorage';

export const getProfile = createAsyncThunk('token/getProfile', async token => {
  const resp = await fetch('https://shop.cyberlearn.vn/api/Users/getProfile', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
    // body: JSON.stringify(data)
  });

  const json = await resp.json();
  return json.content;
});

export const getLocalOrders = createAsyncThunk(
  'orders/getLocalOrders',
  async () => {
    let orders = await getLocalStorage(KEY_LOCAL_ORDERS);
    if (orders === undefined || orders === null) {
      return [];
    } else {
      return orders;
    }
  },
);
