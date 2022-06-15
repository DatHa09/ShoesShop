import {createSlice} from '@reduxjs/toolkit';
const initialState = {
  cart: [],
  isLoading: false,
};

const cartSlice = createSlice({
  name: 'cartSlice',
  initialState,
  reducers: {
    onAddToCart: (state, action) => {
      const data = action.payload;
      state.cart = data;
    },
  },
  extraReducers: builder => {},
});

export const {onAddToCart} = cartSlice.actions;
export default cartSlice.reducer;
