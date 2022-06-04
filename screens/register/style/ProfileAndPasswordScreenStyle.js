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
    // flex: 1,
    // flexGrow: 1,
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
    marginTop: 32,
    marginBottom:24,
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



  marginTop16: {
    marginTop: 16,
  },

  btn_container: {
    // flex: 1,
    alignItems: 'center',
    // justifyContent: 'flex-end',
    marginTop: 46,
    marginBottom: 32,
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
});
