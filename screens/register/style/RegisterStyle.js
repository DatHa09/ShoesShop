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
    marginBottom: 32,
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
  input_container: {
    flex: 1,
    marginBottom: 184,
    marginHorizontal: 16,
    // width: '100%',
    opacity: 0.5,
    alignContent: 'center',
    justifyContent: 'flex-end',
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
  input: {
    height: 48,
    marginLeft: 8,
    flexGrow: 1,
  },
  text_input: {
    fontSize: 14,
    fontFamily: 'Quicksand-Bold',
    color: COLORS.lightGray4,
  },

  btn_container: {
    flex: 2,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop:29
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

  text_sign_up: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 42,
  },
  text_secondary: {
    fontFamily: 'Quicksand-Bold',
    color: COLORS.secondary,
  },
  text_gray: {
    fontFamily: 'Quicksand-Bold',
    color: COLORS.lightGray4,
  },
});
