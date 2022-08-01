import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../../../../common/Theme';
export const styles = StyleSheet.create({
  container_categories: {
    heigh: 56,
    flexDirection: 'row',
    marginHorizontal: 16,
    marginBottom: 16,
    alignItems: 'center',
    borderRadius: 8,

    shadowColor: COLORS.black3,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 10,
    backgroundColor: COLORS.lightGray,
  },

  container_categories_gender: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 56,
    width: SIZES.width / 2 - 16,
  },
  container_categories_gender__title: {
    fontFamily: FONTS.fontFamilyBold,
    fontSize: 16,
    color: COLORS.black3,
  },
  under_line: {
    position: 'absolute',
    bottom: 0,
    width: SIZES.width / 4,
    height: 3,
    backgroundColor: COLORS.secondary,
  },
  line_right: {
    height: 32,
    width: 1,
    backgroundColor: COLORS.black,
    borderRadius: 8,
  },
});
