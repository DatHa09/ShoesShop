import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../../../../common/Theme';

export const styles = StyleSheet.create({
  //shop by brand
  container_brand__title: {
    fontFamily: FONTS.fontFamilyBold,
    color: COLORS.black3,
    fontSize: 24,
    paddingLeft: 16,
    paddingBottom: 8,
  },
  container_brand_name: {
    flexDirection: 'row',
    height: 104,
    width: SIZES.width,
    paddingHorizontal: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  container_brand_name__title: {
    fontFamily: FONTS.fontFamilyBold,
    fontSize: 20,
  },
  container_brand__icon: {
    height: 104,
    width: 104,
  },


});
