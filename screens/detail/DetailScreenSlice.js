import {createSlice} from '@reduxjs/toolkit';
import {fetchProductDetails, fetchRelatedProducts} from './DetailScreenThunk';
const initialState = {
  productDetails: {},
  relatedProducts: [],
  isLoadingProduct: false,
  isLoadingRelated: false,
  sizeSelected: '',
};

const detailSlice = createSlice({
  name: 'detailSlice',
  initialState,
  reducers: {
    onSizeSelected: (state, action) => {
      let size = action.payload;
      state.sizeSelected = size;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchProductDetails.pending, (state, action) => {
        isLoadingProduct = true;
      })
      .addCase(fetchProductDetails.fulfilled, (state, action) => {
        isLoadingProduct = false;
        state.productDetails = action.payload;
      })
      .addCase(fetchRelatedProducts.pending, (state, action) => {
        state.isLoadingRelated = true;
      })
      .addCase(fetchRelatedProducts.fulfilled, (state, action) => {
        state.isLoadingRelated = false;
        state.relatedProducts = action.payload;
      });
  },
});

export const {onSizeSelected} = detailSlice.actions;
export default detailSlice.reducer;
