import {createSlice} from '@reduxjs/toolkit';
import {KEY_LOCAL_WISHLIST} from '../../common/Contants';
import {saveLocalStorage} from '../../common/LocalStorage';
import {getLocalWishList} from './FavoriteScreenThunk';

const initialState = {
  wishlist: [],
  count: 0,
  badge: 0,
  isLoading: false,
};

const favoriteSlice = createSlice({
  name: 'favoriteSlice',
  initialState,
  reducers: {
    onAddToWishList: (state, action) => {
      const data = action.payload;
      state.count = state.count + 1;
      saveLocalStorage(KEY_LOCAL_WISHLIST, data);
    },
    onUpdateWishList: (state, action) => {
      const data = action.payload;
      state.count = state.count + 1; //getLocalWishList được gọi khi count thay đổi
      saveLocalStorage(KEY_LOCAL_WISHLIST, data);
    },
  },
  extraReducers: builder => {
    builder.addCase(getLocalWishList.fulfilled, (state, action) => {
      state.wishlist = action.payload;
      state.badge = action.payload.length;
    });
  },
});

export const {onAddToWishList, onUpdateWishList} = favoriteSlice.actions;
export default favoriteSlice.reducer;
