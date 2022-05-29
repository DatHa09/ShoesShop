import {configureStore} from '@reduxjs/toolkit';
import homeReducer from './screens/home/HomeSlice';
//import reducer

export default store = configureStore({
  reducer: {
    homeReducer,
  },
});
