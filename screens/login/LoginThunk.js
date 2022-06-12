import {createAsyncThunk} from '@reduxjs/toolkit';
import {KEY_ACCESS_TOKEN} from '../../common/Contants';
import {getLocalStorage} from '../../common/LocalStorage';

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

//loginScreen gọi
export const getLocalAccessToken = createAsyncThunk(
  'token/getLocalAccessToken',
  async (_, {dispatch}) => {
    //xử lý login code trước khi update lên state trên store chung
    let token = await getLocalStorage(KEY_ACCESS_TOKEN);
    // console.log('kiểm tra token local');
    // console.log(token);
    if (token === undefined || token === null) {
      return 'no token';
    } else {
      dispatch(getProfile(token.content.accessToken));
      return token;
    }
  },
);

export const getProfile = createAsyncThunk('token/getProfile', async token => {
  const resp = await fetch('http://svcy3.myclass.vn/api/Users/getProfile', {
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
