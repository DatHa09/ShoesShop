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
    paddingVertical: 184,
  },
  input_container: {
    flex: 3,
    marginHorizontal: 16,
  },
  input_container__input: {
    opacity: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 16,
    paddingRight: 8,
    backgroundColor: COLORS.lightGray5,
    marginVertical: 16,
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
    marginTop: 16,
    marginBottom: 24,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.secondary,
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
    marginBottom: 45,
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: COLORS.backgroundSuccess,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: COLORS.borderSuccess,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  modalView_container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },

  button: {
    borderRadius: 16,
    padding: 16,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontFamily: FONTS.fontFamilyBold,
    textAlign: 'center',
    fontSize: 16,
  },
  modalText: {
    // textAlign: 'center',
    fontFamily: FONTS.fontFamilyBold,
    color: COLORS.black3,
  },
});
