import 'react-native-gesture-handler';
import {StatusBar} from 'react-native';
import React from 'react';

//import navigation, stack
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

//import screens
import LoginScreen from './screens/login/LoginScreen';
import ForgotPasswordScreen from './screens/forgotPassword/ForgotPasswordScreen';
import UpdatePasswordScreen from './screens/forgotPassword/UpdatePasswordScreen';
import RegisterScreen from './screens/register/RegisterScreen';
import ProfileAndPasswordScreen from './screens/register/ProfileAndPasswordScreen';
import HomeScreen from './screens/home/HomeScreen';

//import theme
import {COLORS} from './common/Theme';

//import screens name
import {screens} from './common/Contants';
import {Provider} from 'react-redux';
import store from './store';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor={COLORS.black3} hidden={false}/>
      <HomeScreen />
      {/* <LoginScreen/> */}
      {/* <ForgotPasswordScreen /> */}
      {/* <UpdatePasswordScreen /> */}
      {/* <RegisterScreen/> */}
      {/* <ProfileAndPasswordScreen /> */}
    </Provider>
  );
}
