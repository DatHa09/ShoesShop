import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../../common/Theme';

export const styles = StyleSheet.create({
  container_image_bg: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  container_image_bg_title: {
    flex: 1,
    marginTop: 56,
    width: SIZES.width - 56,
  },
  container_image_bg_title__text: {
    fontFamily: FONTS.fontFamilyBold,
    fontSize: 56,
    color: COLORS.secondary,
  },
  container_image_bg_btn: {
    flex: 3,
    justifyContent: 'flex-end',
  },
  container_image_bg_btn__text: {
    borderRadius: 8,
    textAlign: 'center',
    fontFamily: FONTS.fontFamilyBold,
    fontSize: 20,
    color: COLORS.black3,
    backgroundColor: COLORS.secondary,
    padding: 16,
    marginBottom: 56,
    width: SIZES.width - 56,
  },
});
