import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../../common/Theme';

export const styles = StyleSheet.create({
  container: {
    width: SIZES.width / 2 - 24,
    margin: 8,
    padding: 16,
    borderRadius: 5,
    backgroundColor: COLORS.white,
  },
  container_tag: {
    position: 'absolute',
    top: 0,
    left: 0,
    margin: 16,
    backgroundColor: COLORS.secondary,
    borderRadius: 8,
    padding: 4,
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
  },
  container_tag__title: {
    color: COLORS.black3,
    fontSize: 14,
    fontWeight: '500',
    fontFamily: FONTS.fontFamilyBold,
  },
  container__image: {
    width: '100%',
    height: 100,
    marginTop: 24,
  },
  container__name_text: {
    color: COLORS.black3,
    fontSize: 16,
    fontWeight: '500',
    fontFamily: FONTS.fontFamilyBold,
    marginBottom: 8,
  },
  container__short_description: {
    marginBottom: 16,
    color: COLORS.black3,
    fontFamily: FONTS.fontFamilyRegular,
    fontSize: 14,
  },
  container_price: {
    flexGrow: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: 56,
  },
  container_price_content: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: COLORS.gray,
    color: COLORS.secondary,
    fontSize: 16,
    fontFamily: FONTS.fontFamilySemiBold,
  },

  //empty search item
  container_empty_search: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 16,
  },
  container_empty_search__title: {
    fontFamily: FONTS.fontFamilyBold,
    color: COLORS.black3,
    textAlign: 'center',
    fontSize: 24,
    marginBottom: 16,
  },
  container_empty_search__text: {
    fontFamily: FONTS.fontFamilyMedium,
    color: COLORS.black3,
    textAlign: 'center',
    fontSize: 16,
  },
});
