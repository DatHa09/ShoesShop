import {createSlice} from '@reduxjs/toolkit';
import {KEY_LOCAL_ORDERS} from '../../common/Contants';
import {saveLocalStorage} from '../../common/LocalStorage';
import { getLocalOrders, getProfile } from './profileScreenThunk';
const initialState = {
  profile: [],
  orders: [],
  isLoading: false,
  // count: 0,
};

const profileSlice = createSlice({
  name: 'profileSlice',
  initialState,
  reducers: {
    onAddOrder: (state, action) => {
      const data = action.payload;
      saveLocalStorage(KEY_LOCAL_ORDERS, data);
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getLocalOrders.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getLocalOrders.fulfilled, (state, action) => {
        const data = action.payload;
        state.orders = data;
      })
      .addCase(getProfile.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getProfile.fulfilled, (state, action) => {
        state.profile = action.payload;
      });
  },
});

export const {onAddOrder} = profileSlice.actions;
export default profileSlice.reducer;
