import {createSlice} from '@reduxjs/toolkit';
import {
  deleteOrder,
  editProfile,
  getProfile,
} from './profileScreenThunk';
const initialState = {
  profile: [],
  orders: [],
  count: '',
  isLoading: false,
};

const profileSlice = createSlice({
  name: 'profileSlice',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getProfile.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getProfile.fulfilled, (state, action) => {
        state.profile = action.payload;
      })
      .addCase(editProfile.fulfilled, (state, action) => {
        state.count = state.count + 1;
      })
      .addCase(deleteOrder.fulfilled, (state, action) => {
        state.count = state.count + 1;
      });
  },
});

export default profileSlice.reducer;
