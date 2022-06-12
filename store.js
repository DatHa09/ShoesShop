import {configureStore} from '@reduxjs/toolkit';
//import reducer
import homeReducer from './screens/home/HomeSlice';
import loginReducer from './screens/login/LoginSlice';
import registerReducer from './screens/register/RegisterSlice';
import searchReducer from './screens/search/SearchSlice';
import detailReducer from './screens/detail/DetailScreenSlice';

export default store = configureStore({
  reducer: {
    homeReducer,
    loginReducer,
    registerReducer,
    searchReducer,
    detailReducer,
  },
});
