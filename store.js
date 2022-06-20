import {configureStore} from '@reduxjs/toolkit';
//import reducer
import homeReducer from './screens/home/HomeSlice';
import loginReducer from './screens/login/LoginSlice';
import registerReducer from './screens/register/RegisterSlice';
import searchReducer from './screens/search/SearchSlice';
import detailReducer from './screens/detail/DetailScreenSlice';
import cartReducer from './screens/cart/CartScreenSlice';
import profileReducer from './screens/profile/profileScreenSlice';

export default store = configureStore({
  reducer: {
    homeReducer,
    loginReducer,
    registerReducer,
    searchReducer,
    detailReducer,
    cartReducer,
    profileReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false, //bỏ qua check cảnh báo dữ liệu state lớn
    }),
});
