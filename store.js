import {configureStore} from '@reduxjs/toolkit';
//import reducer
import homeReducer from './screens/home/HomeSlice';
import loginReducer from './screens/login/LoginSlice';

export default store = configureStore({
  reducer: {
    homeReducer,
    loginReducer,
  },
});
