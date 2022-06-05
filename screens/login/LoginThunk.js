import {createAsyncThunk} from '@reduxjs/toolkit';
import {KEY_ACCESS_TOKEN} from '../../common/Contants';
import { getLocalStorage } from '../../common/LocalStorage';

export const checkLogin = createAsyncThunk(
  'login/checkLogin',
  async dataLogin => {
    const resp = await fetch('http://svcy3.myclass.vn/api/Users/signin', {
      method: 'POST',
      headers: {
        // Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: dataLogin.email,
        password: dataLogin.password,
      }),
    });
    const json = await resp.json();
    return json;
  },
);

export const getLocalAccessToken = createAsyncThunk(
  'token/getLocalAccessToken',
  async () => {
    //xử lý login code trước khi update lên state trên store chung
    let token = await getLocalStorage(KEY_ACCESS_TOKEN);
    console.log('kiểm tra token local');
    console.log(token);
    if (token === undefined || token === null) {
      return 'no token';
    } else {
      return token;
    }
  },
);