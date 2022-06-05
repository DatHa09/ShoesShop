export const screens = {
  drawer_menu: 'DrawerMenu',
  login_screen: 'LoginScreen',
  forgot_password_screen: 'ForgotPasswordScreen',
  register_screen: 'RegisterScreen',
  home_screen: 'HomeScreen',
  detail_screen: 'DetailScreen',
  cart_screen: 'CartScreen',
  feature_screen: 'FeatureScreen',
  forgot_password_screen: 'ForgotPasswordScreen',
  update_password_screen: 'UpdatePasswordScreen',
  register_screen: 'RegisterScreen',
  profile_password_screen: 'ProfileAndPasswordScreen',
  products: 'Products',
  tab_home: 'Home',
  tab_search: 'Search',
  tab_profile: 'Profile',
  tab_notifications: 'Notifications',
  tab_settings: 'Settings',
  tab_order: 'My Order',
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

export const emailRegex =
/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
export const uppercaseRegex = /(?=.*[A-Z])/;
export const lowercaseRegex = /(?=.*[a-z])/;
export const numericRegex = /(?=.*[0-9])/;
export const specialCharsRegex = /(?=.*[!\@\#\$\%\^\&\*\(\)\_\-\=\+\?\>\<\.\,])/;
export const phoneRegex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
