import {createSlice} from '@reduxjs/toolkit';
import {KEY_LOCAL_WISHLIST} from '../../common/Contants';
import {saveLocalStorage} from '../../common/LocalStorage';
import { getLocalWishList } from './FavoriteScreenThunk';

const initialState = {
  wishlist: [],
  isLoading: false,
};

const favoriteSlice = createSlice({
  name: 'favoriteSlice',
  initialState,
  reducers: {
    onAddToWishList: (state, action) => {
      const data = action.payload;
      saveLocalStorage(KEY_LOCAL_WISHLIST, data);
    },
    onUpdateWishList: (state, action) => {
      const data = action.payload;
      saveLocalStorage(KEY_LOCAL_WISHLIST, data);
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getLocalWishList.fulfilled, (state, action) => {
        state.wishlist = action.payload;
      })
  },
});

export const {onAddToWishList, onUpdateWishList} = favoriteSlice.actions;
export default favoriteSlice.reducer;
