import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const SIZES = {
  padding: 10,
  padding12: 12,
  radius: 30,
  width,
  height,
};

export const COLORS = {
  primary: '#434343',
  primary2: '#000000',
  secondary: '#e8c77a',

  black: '#1E1F20',
  black2: '#434343',
  black3: '#000',
  white: '#FFFFFF',

  green: '#00FE9C',
  backgroundSuccess: '#f6ffed',
  backgroundError: '#fff2f0',
  borderSuccess: '#b7eb8f',
  borderError: '#ffccc7',

  red: '#f5222d',

  lightGray: '#F5F5F6',
  lightGray2: '#F6F6F7',
  lightGray3: '#f0f0f0',
  lightGray4: '#c3c3c3',
  lightGray5: '#d9d9d9',
  transparent: 'transparent',
  darkGray: '#898C95',
  gray: '#595959',
  gray2: '#262626',
};

export const STYLES = {
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 1,
  },
};

export const FONTS = {
  fontFamilyBold: 'Quicksand-Bold',
  fontFamilyLight: 'Quicksand-Light',
  fontFamilyMedium: 'Quicksand-Medium',
  fontFamilyRegular: 'Quicksand-Regular',
  fontFamilySemiBold: 'Quicksand-SemiBold',
};
