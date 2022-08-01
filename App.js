import 'react-native-gesture-handler';
import {StatusBar} from 'react-native';
import React from 'react';

//import navigation, stack
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

//import screens
import LoginScreen from './screens/login/LoginScreen';
import RegisterScreen from './screens/register/RegisterScreen';

//import theme
import {COLORS} from './common/Theme';

//import screens name
import {screens} from './common/Contants';
import {Provider} from 'react-redux';
import {Provider as PaperProvider} from 'react-native-paper';
import store from './store';
import DetailScreen from './screens/detail/DetailScreen';
import ProductsScreen from './screens/products/ProductsScreen';
import SearchScreen from './screens/search/SearchScreen';
import GetStartedScreen from './screens/splash/GetStartedScreen';
import EditProfileScreen from './screens/editProfile/EditProfileScreen';
import ChangePasswordScreen from './screens/changePassword/ChangePasswordScreen';
import OrderHistoryScreen from './screens/orderHistory/OrderHistoryScreen';
import BottomTabHomeScreen from './navigation/BottomTabHomeScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      {/* PaperProvider để sủ dụng <Badge/> */}
      <PaperProvider>
        <StatusBar backgroundColor={COLORS.black3} hidden={false} />
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName={screens.get_started_screen}
            screenOptions={{
              headerShown: false,
            }}>
            <Stack.Screen
              name={screens.get_started_screen}
              component={GetStartedScreen}
            />
            <Stack.Screen
              name={screens.bottom_tab_home}
              options={{headerShown: false}}
              component={BottomTabHomeScreen}
            />
            <Stack.Screen name={screens.login_screen} component={LoginScreen} />

            <Stack.Screen
              name={screens.detail_screen}
              component={DetailScreen}
            />
            <Stack.Screen name={screens.products} component={ProductsScreen} />
            <Stack.Screen
              name={screens.search_screen}
              component={SearchScreen}
            />
            <Stack.Screen
              name={screens.register_screen}
              component={RegisterScreen}
            />
            <Stack.Screen
              name={screens.edit_profile_screen}
              component={EditProfileScreen}
            />
            <Stack.Screen
              name={screens.change_password_screen}
              component={ChangePasswordScreen}
            />
            <Stack.Screen
              name={screens.order_history_screen}
              component={OrderHistoryScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
}
