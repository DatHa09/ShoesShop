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

export const editProfile = createAsyncThunk(
  'profile/editProfile',
  async dataUpdateProfile => {
    const resp = await fetch(
      'https://shop.cyberlearn.vn/api/Users/updateProfile',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${dataUpdateProfile.token}`,
        },
        body: JSON.stringify({
          email: dataUpdateProfile.email,
          password: dataUpdateProfile.password,
          name: dataUpdateProfile.name,
          gender: dataUpdateProfile.gender,
          phone: dataUpdateProfile.phone,
        }),
      },
    );
    const json = await resp.json();
    return json;
  },
);

export const changePassword = createAsyncThunk(
  'profile/changePassword',
  async dataUpdateProfile => {
    const resp = await fetch(
      'https://shop.cyberlearn.vn/api/Users/changePassword',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${dataUpdateProfile.token}`,
        },
        body: JSON.stringify({
          newPassword: dataUpdateProfile.newPassword,
        }),
      },
    );
    const json = await resp.json();
    return json;
  },
);

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
