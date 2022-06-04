import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../../common/Theme';
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
    // justifyContent: 'center',
    // alignItems: 'flex-start',
  },
  app_bar: {
    paddingTop: 16,
    marginBottom: 56,
  },
  title: {
    fontSize: 32,
    marginVertical: 32,
  },
  text: {
    fontFamily: 'Quicksand-Bold',
    color: COLORS.lightGray4,
    fontSize: 16,
  },
  text_secondary: {
    fontFamily: 'Quicksand-Bold',
    color: COLORS.secondary,
  },
  marginLeft16: {
    marginLeft: 16,
  },
  marginRight32: {
    marginRight: 90,
  },

  input_container: {
    marginHorizontal: 16,
    opacity: 0.5,
    justifyContent: 'center',
  },
  input_container__input: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 16,
    paddingRight: 8,
    backgroundColor: COLORS.lightGray5,
    marginBottom: 32,
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
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    paddingLeft: 16,
    backgroundColor: COLORS.lightGray5,
  },

  genderPicker: {
    flexGrow: 1,
    fontFamily: 'Quicksand-Bold',
  },

  btn_container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 233,
    marginBottom:24
  },

  btn: {
    width: '80%',
    height: 48,
    borderRadius: 8,
   
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
    fontFamily: 'Quicksand-Bold',
    fontSize: 16,
    color: COLORS.black3,
  },
});
