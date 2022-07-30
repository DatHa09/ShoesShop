import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../../common/Theme';
export const styles = StyleSheet.create({
  input_container: {
    marginHorizontal: 16,
    justifyContent: 'center',
  },
  input_container__input: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 16,
    paddingRight: 8,
    backgroundColor: COLORS.white,
    borderRadius: 8,
  },

  title: {
    marginLeft: 16,
    marginBottom: 8,
    color: COLORS.black3,
    fontFamily: FONTS.fontFamilyBold,
    fontSize: 17,
  },

  input: {
    height: 48,
    paddingHorizontal: 16,
    flexGrow: 1,
  },
  text_input: {
    fontSize: 14,
    fontFamily: FONTS.fontFamilyBold,
    color: COLORS.black,
  },

  validate_container: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  validate_container__text: {
    fontFamily: FONTS.fontFamilyRegular,
    color: COLORS.red,
    fontSize: 14,
  },

  gender: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    paddingLeft: 16,
    marginBottom: 16,
    backgroundColor: COLORS.white,
  },

  genderPicker: {
    flexGrow: 1,
    fontFamily: FONTS.fontFamilyBold,
  },

  text_validate: {
    fontFamily: FONTS.fontFamilyRegular,
    fontSize: 14,
    color: COLORS.red,
    marginLeft: 16,
  },

  btn_container: {
    // flex: 1,
    alignItems: 'center',
    // justifyContent: 'flex-end',
    marginTop: 46,
    marginBottom: 34,
  },

  btn: {
    width: '80%',
    // height: 48,
    padding: 16,
    borderRadius: 8,
    // marginBott: 24,
    alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: COLORS.secondary,
  },
  btn_sign_in: {
    fontFamily: FONTS.fontFamilyBold,
    fontSize: 16,
    color: COLORS.black3,
  },

  marginBottom16: {
    marginBottom: 16,
  },

  marginTop16: {
    marginTop: 16,
  },

  marginHorizontal_Bottom16: {
    marginHorizontal: 16,
    marginBottom: 16,
  },

  icon_size: {
    width: 24,
    height: 24,
  },
});
