import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../../common/Theme';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.lightGray,
  },
  container_title: {
    flexGrow: 1,
    marginLeft: 16,
    marginBottom: 55,
    // alignItems: 'center',
    justifyContent: 'center',
  },
  title_text: {
    fontFamily: FONTS.fontFamilyBold,
    fontSize: 32,
  },
  title_text__secondary: {
    fontSize: 40,
    color: COLORS.secondary,
  },
  title_text__white: {
    color: COLORS.white,
  },
});
