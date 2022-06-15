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
