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

  //featured shoes
  container_featured_shoes: {
    flex: 1,
    marginTop: 16,
  },
  container_featured_shoes_title: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  container_featured_shoes_title__text: {
    color: COLORS.black3,
    fontSize: 24,
    fontFamily: FONTS.fontFamilyBold,
  },
  btn_see_more: {
    fontFamily: FONTS.fontFamilySemiBold,
    color: COLORS.darkGray,
    fontSize: 16,
  },

  //render featured shoes
  container_render_featured_shoes: {
    width: SIZES.width / 2 - 24,
    margin: 8,
    padding: 16,
    borderRadius: 5,
    backgroundColor: '#FFF',
  },

  container_render_featured_shoes_tag: {
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
  container_render_featured_shoes_tag__title: {
    color: COLORS.black3,
    fontSize: 14,
    fontWeight: '500',
    fontFamily: FONTS.fontFamilyBold,
  },

  container_render_featured_shoes_image: {
    width: '100%',
    height: 100,
    marginTop: 24,
  },
  container_render_featured_shoes__name: {
    color: COLORS.black3,
    fontSize: 16,
    fontWeight: '500',
    fontFamily: FONTS.fontFamilyBold,
    marginBottom: 8,
  },
  container_render_featured_shoes__short_description: {
    marginBottom: 16,
    color: COLORS.black3,
    fontFamily: FONTS.fontFamilyRegular,
    fontSize: 14,
  },
  container_render_featured_shoes_price: {
    flexGrow: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: 56,
  },
  container_render_featured_shoes_price__content: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: COLORS.gray,
    color: COLORS.secondary,
    fontSize: 16,
    fontFamily: FONTS.fontFamilyRegular,
  },

  //loading...
  container_loading: {
    marginHorizontal: 8,
  },
  container_loading__title: {
    fontFamily: FONTS.fontFamilyBold,
    color: COLORS.black3,
    fontSize: 24,
  },
});
