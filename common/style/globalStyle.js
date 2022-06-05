import {StyleSheet} from 'react-native';
import {FONTS, COLORS} from '../Theme';
export const globalStyles = StyleSheet.create({
  validate_container: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  validate_container__text: {
    fontFamily: FONTS.fontFamilyRegular,
    color: COLORS.white,
    fontSize: 14,
  },
});
