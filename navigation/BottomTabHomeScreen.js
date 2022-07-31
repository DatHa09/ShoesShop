import {View, Text, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {screens} from '../common/Contants';
import HomeScreen from '../screens/home/HomeScreen';
import FavoriteScreen from '../screens/favorite/FavoriteScreen';
import CartScreen from '../screens/cart/CartScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';
import {ICONS} from '../common/Images';
import {COLORS} from '../common/Theme';
import {useDispatch, useSelector} from 'react-redux';
import {getLocalWishList} from '../screens/favorite/FavoriteScreenThunk';
import {getLocalCart} from '../screens/cart/CartScreenThunk';

const Tab = createBottomTabNavigator();

export default function BottomTabHomeScreen() {
  const wishList = useSelector(state => state.favoriteReducer.wishlist);
  const cart = useSelector(state => state.cartReducer.cart);

  //Với mỗi lần press delete thì sẽ get cart và wishlist
  const badgeWishlist = useSelector(state => state.favoriteReducer.badge);
  const badgeCart = useSelector(state => state.cartReducer.badge);

  const [countItemCart, setCountItemCart] = useState(badgeCart);
  const [countItemWishList, setCountItemWishList] = useState(badgeWishlist);

  useEffect(() => {
    setCountItemWishList(badgeWishlist);
  }, [badgeWishlist]);

  useEffect(() => {
    setCountItemCart(badgeCart);
  }, [badgeCart]);

  const dispatch = useDispatch();

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          let routeName = route.name;
          if (routeName === screens.home_screen) {
            // iconName = ICONS.home;
            iconName = focused ? ICONS.fill_home : ICONS.home;
            // iconName = faUtensils;
          }
          if (routeName === screens.favorite_screen) {
            // iconName = ICONS.heart;
            // iconName = faHeart;
            iconName = focused ? ICONS.fill_heart : ICONS.heart;
          }
          if (routeName === screens.profile_screen) {
            // iconName = ICONS.profile;
            iconName = focused ? ICONS.fill_profile : ICONS.profile;
            // iconName = faUser;
          }
          if (routeName === screens.cart_screen) {
            // iconName = ICONS.buy;
            iconName = focused ? ICONS.fill_buy : ICONS.buy;
            // iconName = faBasketShopping;
          }
          // return <FontAwesomeIcon icon={iconName} color={color} size={size} />;
          return <Image source={iconName} style={{width: 24, height: 24}} />;
        },

        tabBarActiveTintColor: COLORS.secondary,
        tabBarInactiveTintColor: COLORS.black3,
        // tabBarLabelStyle: {paddingBottom: 10, fontSize: 15},
        // tabBarStyle: {height: 70},
        headerShown: false,
        tabBarShowLabel: false,
      })}>
      <Tab.Screen
        name={screens.home_screen}
        option={{tabBarShowLabel: false, headerShown: false}}
        component={HomeScreen}
      />
      <Tab.Screen
        name={screens.favorite_screen}
        // option={{tabBarShowLabel: false, headerShown: false}}
        options={{
          tabBarBadge: countItemWishList,
          tabBarShowLabel: false,
          headerShown: false,
        }}
        component={FavoriteScreen}
      />
      <Tab.Screen
        name={screens.cart_screen}
        options={{
          tabBarBadge: countItemCart,
          tabBarShowLabel: false,
          headerShown: false,
        }}
        component={CartScreen}
      />
      <Tab.Screen
        name={screens.profile_screen}
        option={{tabBarShowLabel: false, headerShown: false}}
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
}
