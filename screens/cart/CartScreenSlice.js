import {createSlice} from '@reduxjs/toolkit';
import {KEY_LOCAL_CART} from '../../common/Contants';
import {saveLocalStorage} from '../../common/LocalStorage';
import {getLocalCart} from './CartScreenThunk';
const initialState = {
  cart: [],
  isLoading: false,
  count: 0,
};

const cartSlice = createSlice({
  name: 'cartSlice',
  initialState,
  reducers: {
    onUpdateCart: (state, action) => {
      const data = action.payload;
      state.count = state.count + 1; //xác định cart có thay đỗi với mỗi lần nhấn button + -
      saveLocalStorage(KEY_LOCAL_CART, data);
    },
  },
  extraReducers: builder => {
    builder.addCase(getLocalCart.fulfilled, (state, action) => {
      state.cart = action.payload;
    });
  },
});

export const {onUpdateCart} = cartSlice.actions;
export default cartSlice.reducer;
