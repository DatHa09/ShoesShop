import {View, Text, ImageBackground} from 'react-native';
import React, {useRef, useState} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {IMAGES} from '../common/Images';
import {COLORS} from '../common/Theme';
import {screens} from '../common/Contants';
import HomeScreen from '../screens/home/HomeScreen';
import CustomDrawerContent from './components/CustomDrawerContent';
import Animated from 'react-native-reanimated';
import ProfileScreen from '../screens/profile/ProfileScreen';
import FavoriteScreen from '../screens/favorite/FavoriteScreen';
import NotificationScreen from '../screens/notification/NotificationScreen';
import SettingScreen from '../screens/setting/SettingScreen';
import LoginScreen from '../screens/login/LoginScreen';
import CartScreen from '../screens/cart/CartScreen';

const Drawer = createDrawerNavigator();

export default function CustomDrawer() {
  const [progress, setProgress] = useState(
    useRef(new Animated.Value(0)).current,
  );
  const scale = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.88],
  });

  const borderRadius = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [0, 24],
  });

  const animatedStyle = {borderRadius, transform: [{scale}]};
  return (
    <ImageBackground source={IMAGES.drawer_background} style={{flex: 1}}>
      <Drawer.Navigator
        initialRouteName={screens.tab_home}
        screenOptions={{
          headerShown: false,
          drawerType: 'slide',
          overlayColor: 'transparent',
          drawerStyle: {
            flex: 1,
            width: '65%',
            padding: 24,
            backgroundColor: COLORS.transparent,
          },
          sceneContainerStyle: {
            backgroundColor: COLORS.transparent,
          },
        }}
        drawerContent={props => {
          setTimeout(() => {
            setProgress(props.progress);
          }, 0);
          return <CustomDrawerContent navigation={props.navigation} />;
        }}>
        {/* <Drawer.Screen name={screens.tab_home}>
          {props => (
            <HomeScreen {...props} drawerAnimationStyle={animatedStyle} />
          )}
        </Drawer.Screen> */}
        <Drawer.Screen name={screens.tab_home} component={HomeScreen} />
        <Drawer.Screen name={screens.tab_profile} component={ProfileScreen} />
        <Drawer.Screen name={screens.tab_cart} component={CartScreen} />
        <Drawer.Screen name={screens.tab_like} component={FavoriteScreen} />
        <Drawer.Screen
          name={screens.tab_notifications}
          component={NotificationScreen}
        />
        <Drawer.Screen name={screens.tab_settings} component={SettingScreen} />
        {/* <Drawer.Screen name={screens.login_screen} component={LoginScreen} /> */}
      </Drawer.Navigator>
    </ImageBackground>
  );
}
