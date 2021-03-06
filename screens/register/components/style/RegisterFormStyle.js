import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../../../common/Theme';
export const styles = StyleSheet.create({
  input_container: {
    marginHorizontal: 16,
    justifyContent: 'center',
  },
  input_container__input: {
    opacity: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 16,
    paddingRight: 8,
    backgroundColor: COLORS.lightGray5,
    borderRadius: 8,
  },

  input: {
    height: 48,
    paddingHorizontal: 16,
    flexGrow: 1,
  },
  text_input: {
    fontSize: 14,
    fontFamily: 'Quicksand-Bold',
    color: COLORS.black,
  },

  gender: {
    opacity: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    paddingLeft: 16,
    marginBottom: 16,
    backgroundColor: COLORS.lightGray5,
  },

  genderPicker: {
    flexGrow: 1,
    fontFamily: 'Quicksand-Bold',
  },

  text_validate: {
    fontFamily: 'Quicksand-Regular',
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
    fontFamily: 'Quicksand-Bold',
    fontSize: 16,
    color: COLORS.black3,
  },

  marginBottom16: {
    marginBottom: 16,
  },

  marginTop16: {
    marginTop: 16,
  },

  marginVertical16: {
    marginVertical: 16,
  },
});
