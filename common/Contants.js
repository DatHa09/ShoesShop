export const screens = {
  get_started_screen: 'GetStartedScreen',
  drawer_menu: 'DrawerMenu',
  login_screen: 'LoginScreen',
  forgot_password_screen: 'ForgotPasswordScreen',
  register_screen: 'RegisterScreen',
  home_screen: 'HomeScreen',
  search_screen: 'SearchScreen',
  detail_screen: 'DetailScreen',
  cart_screen: 'CartScreen',
  favorite_screen: 'FavoriteScreen',
  feature_screen: 'FeatureScreen',
  change_password_screen: 'ChangePasswordScreen',
  forgot_password_screen: 'ForgotPasswordScreen',
  update_password_screen: 'UpdatePasswordScreen',
  register_screen: 'RegisterScreen',
  profile_screen: 'ProfileScreen',
  edit_profile_screen: 'EditProfileScreen',
  order_history_screen: 'OrderHistoryScreen',
  products: 'Products',
  tab_home: 'Home',
  tab_search: 'Search',
  tab_profile: 'Profile',
  tab_notifications: 'Notifications',
  tab_settings: 'Settings',
  tab_cart: 'Cart',
  tab_like: 'Favorite',
};

export const categories = {
  men: 'MEN',
  women: 'WOMEN',
  nike: 'NIKE',
  adidas: 'ADIDAS',
  vans_converse: 'VANS_CONVERSE',
};

export const KEY_LOCAL_STORAGE = 'localStorage';
export const KEY_ACCESS_TOKEN = 'accessToken';
export const KEY_LOCAL_CART = 'localStore123';
export const KEY_LOCAL_WISHLIST = 'localWishList';
export const KEY_LOCAL_ORDERS = 'localOrders';

export const emailRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
export const uppercaseRegex = /(?=.*[A-Z])/;
export const lowercaseRegex = /(?=.*[a-z])/;
export const numericRegex = /(?=.*[0-9])/;
export const specialCharsRegex =
  /(?=.*[!\@\#\$\%\^\&\*\(\)\_\-\=\+\?\>\<\.\,])/;
export const phoneRegex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
