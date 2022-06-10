import {createSlice} from '@reduxjs/toolkit';
import {fetchSearchProducts} from './SearchThunk';
const initialState = {
  dataSearch: [],
  isSearchLoading: false,
};

const searchSlice = createSlice({
  name: 'searchSlice',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchSearchProducts.pending, (state, action) => {
        state.isSearchLoading = true;
      })
      .addCase(fetchSearchProducts.fulfilled, (state, action) => {
        state.dataSearch = action.payload;
        state.isSearchLoading = false;
      });
  },
});

export default searchSlice.reducer;
