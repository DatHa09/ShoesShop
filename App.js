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
// import ProfileAndPasswordScreen from './screens/register/ProfileAndPasswordScreen';
import HomeScreen from './screens/home/HomeScreen';

//import theme
import {COLORS} from './common/Theme';

//import screens name
import {screens} from './common/Contants';
import {Provider} from 'react-redux';
import store from './store';
import DetailScreen from './screens/detail/DetailScreen';
import ProductsScreen from './screens/products/ProductsScreen';
import CartScreen from './screens/cart/CartScreen';
import CustomDrawer from './navigation/CustomDrawer';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor={COLORS.black3} hidden={false} />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={screens.login_screen}
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name={screens.login_screen} component={LoginScreen} />
          <Stack.Screen name={screens.drawer_menu} component={CustomDrawer} />
          <Stack.Screen name={screens.detail_screen} component={DetailScreen} />
          <Stack.Screen name={screens.products} component={ProductsScreen} />
          <Stack.Screen name={screens.cart_screen} component={CartScreen} />
          <Stack.Screen
            name={screens.forgot_password_screen}
            component={ForgotPasswordScreen}
          />
          <Stack.Screen
            name={screens.update_password_screen}
            component={UpdatePasswordScreen}
          />
          <Stack.Screen
            name={screens.register_screen}
            component={RegisterScreen}
          />
          {/* <Stack.Screen
            name={screens.profile_password_screen}
            component={ProfileAndPasswordScreen}
          /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
