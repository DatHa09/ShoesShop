import {createSlice} from '@reduxjs/toolkit';
import {KEY_ACCESS_TOKEN} from '../../common/Contants';
import {saveLocalStorage} from '../../common/LocalStorage';
import {checkLogin, getLocalAccessToken, getProfile} from './LoginThunk';
const initialState = {
  isLoading: false,
  accessToken: '',
  profile: [],
  // message: '',
};

const loginSlice = createSlice({
  name: 'loginSlice',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(checkLogin.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(checkLogin.fulfilled, (state, action) => {
        state.accessToken = action.payload.content.accessToken;
        //lưu vào LocalStorage
        saveLocalStorage(KEY_ACCESS_TOKEN, action.payload);
      })
      .addCase(getLocalAccessToken.pending, (state, action) => {
        isLoading = true;
      })
      .addCase(getLocalAccessToken.fulfilled, (state, action) => {
        state.accessToken = action.payload;
      })
      .addCase(getProfile.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getProfile.fulfilled, (state, action) => {
        state.profile = action.payload;
      });
  },
});

export default loginSlice.reducer;
