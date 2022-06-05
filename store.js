import {configureStore} from '@reduxjs/toolkit';
//import reducer
import homeReducer from './screens/home/HomeSlice';
import loginReducer from './screens/login/LoginSlice';
import registerReducer from './screens/register/RegisterSlice';

export default store = configureStore({
  reducer: {
    homeReducer,
    loginReducer,
    registerReducer,
  },
});
