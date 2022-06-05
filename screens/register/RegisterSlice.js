import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
};

const registerSlice = createSlice({
  name: 'registerSlice',
  initialState,
  reducers: {},
  extraReducers: builder => {},
});

export default registerSlice.reducer;
