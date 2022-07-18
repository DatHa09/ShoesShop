import {createAsyncThunk} from '@reduxjs/toolkit';

export const checkRegister = createAsyncThunk(
  'register/checkRegister',
  async dataRegister => {
    const resp = await fetch('https://shop.cyberlearn.vn/api/Users/signup', {
      method: 'POST',
      headers: {
        // Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: dataRegister.email,
        password: dataRegister.password,
        name: dataRegister.name,
        gender: dataRegister.gender,
        phone: dataRegister.phone,
      }),
    });
    const json = await resp.json();
    return json;
  },
);
