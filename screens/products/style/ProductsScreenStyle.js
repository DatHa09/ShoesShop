import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../../common/Theme';

export const styles = StyleSheet.create({
  //loading...
  container_loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container_loading__text: {
    fontFamily: FONTS.fontFamilyBold,
    color: COLORS.black3,
    fontSize: 24,
  },

  //render Item
  container_item: {
    width: SIZES.width / 2 - 24,
    margin: 8,
    padding: 16,
    borderRadius: 5,
    backgroundColor: COLORS.white,
  },
  container_item_tag: {
    position: 'absolute',
    top: 0,
    left: 0,
    margin: 16,
    padding: 4,
    backgroundColor: COLORS.secondary,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
  },
  container_item_tag__title: {
    color: COLORS.black3,
    fontSize: 14,
    fontWeight: '500',
    fontFamily: FONTS.fontFamilyBold,
  },
  container_item_image: {
    width: '100%',
    height: 100,
    marginTop: 24,
  },
  container_item_name: {
    color: COLORS.black3,
    fontSize: 16,
    fontWeight: '500',
    fontFamily: FONTS.fontFamilyBold,
    marginBottom: 8,
  },
  container_item_short_description: {
    marginBottom: 16,
    color: COLORS.black3,
    fontFamily: FONTS.fontFamilyRegular,
    fontSize: 14,
  },
  container_item_price: {
    flexGrow: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: 56,
  },
  container_item_price__content: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: COLORS.gray,
    color: COLORS.secondary,
    fontSize: 16,
    fontFamily: FONTS.fontFamilySemiBold,
  },
});
