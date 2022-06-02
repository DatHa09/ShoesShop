import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../../common/Theme';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container_background_image: {
    flex: 1,
  },
  container_background_overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    justifyContent: 'center',
  },
  input_container: {
    // flex: 1,
    marginHorizontal: 16,
    // width: '100%',
    opacity: 0.5,
  },
  input_container__input: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 16,
    paddingRight: 8,
    backgroundColor: COLORS.lightGray5,
    marginBottom: 16,
    borderRadius: 8,
  },

  text: {
    fontFamily: FONTS.fontFamilyBold,
    color: COLORS.black,
    fontSize: 16,
  },

  input: {
    height: 48,
    paddingHorizontal: 8,
    width: SIZES.width - 140,
    flexGrow: 1,
  },

  text_container: {
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    marginBottom: 40,
  },
  btn: {
    height: 48,
    borderRadius: 8,
    marginHorizontal: 16,
    marginBottom: 24,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.secondary,
  },
  btn_sign_in__shadow: {
    shadowColor: COLORS.secondary,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
  btn_sign_in: {
    fontFamily: FONTS.fontFamilyBold,
    fontSize: 16,
    color: COLORS.black3,
  },
  text_sign_up: {
    flexDirection: 'row',
  },
  text_secondary: {
    fontFamily: FONTS.fontFamilyBold,
    color: COLORS.secondary,
  },
  text_gray: {
    fontFamily: FONTS.fontFamilyBold,
    color: COLORS.lightGray4,
  },

  forgot_password: {
    marginTop: 16,
  },
});