import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../../common/Theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: COLORS.lightGray,
  },
  btn_shopping: {
    justifyContent: 'flex-end',
    marginVertical: 24,
    marginHorizontal: 16,
  },
  btn_shopping__text: {
    textAlign: 'center',
    padding: 4,
    paddingTop: 8,
    borderRadius: 8,
    fontFamily: FONTS.fontFamilySemiBold,
    color: COLORS.black3,
    fontSize: 18,
    backgroundColor: COLORS.secondary,
    height: 48,
  },

  container_empty_cart: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 16,
  },

  container_empty_cart__title: {
    fontFamily: FONTS.fontFamilyBold,
    color: COLORS.black3,
    textAlign: 'center',
    fontSize: 24,
    marginBottom: 16,
  },
  container_empty_cart__text: {
    fontFamily: FONTS.fontFamilyMedium,
    color: COLORS.black3,
    textAlign: 'center',
    fontSize: 16,
  },

  container_checkout: {
    height: 160,
    justifyContent: 'flex-end',
    backgroundColor: COLORS.lightGray,
    paddingHorizontal: 16,
  },
  container_checkout_price_info: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.secondary,
  },
  container_checkout_price_info__total: {
    fontFamily: FONTS.fontFamilySemiBold,
    color: COLORS.black3,
    fontSize: 20,
    marginBottom: 16,
    textAlign: 'center',
  },
  container_checkout_price_info__price: {
    fontFamily: FONTS.fontFamilySemiBold,
    color: COLORS.black3,
    fontSize: 20,
    marginBottom: 16,
  },
  btn_checkout: {
    marginVertical: 24,
  },
  btn_checkout__text: {
    textAlign: 'center',
    padding: 4,
    paddingTop: 8,
    borderRadius: 8,
    fontFamily: FONTS.fontFamilySemiBold,
    color: COLORS.secondary,
    fontSize: 18,
    backgroundColor: COLORS.black3,
    height: 48,
  },

  // render cart
  container__bg_overlay_delete_btn: {
    borderRadius: 24,
    margin: 8,
    backgroundColor: COLORS.red,
    height: 100,
    position: 'absolute',
    width: SIZES.width - 24, //24 = margin(8) chính nó + margin(8) của RenderRight + margin(8) của FlatList
  },

  //render button delete
  btn_delete_swipable: {
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: 24,
    borderBottomRightRadius: 24,
    marginVertical: 8,
    paddingHorizontal: 16,
    paddingBottom: 8,
    height: 100,
  },
  btn_delete_swipable__text: {
    fontFamily: FONTS.fontFamilyMedium,
    color: COLORS.white,
  },

  //swipeable
  container_swipable: {
    borderRadius: 24,
    borderColor: COLORS.secondary,
    marginVertical: 8,
    paddingHorizontal: 8,
    backgroundColor: COLORS.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  container_swipable_content_left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  container_swipable_content_left__image: {
    width: 100,
    height: 100,
  },
  container_swipable_content_left_info: {
    marginLeft: 8,
    width: 168,
  },
  container_swipable_content_left_info__name: {
    fontFamily: FONTS.fontFamilyBold,
    color: COLORS.black3,
  },
  container_swipable_content_left_info_size_container: {
    width: 64,
    height: 32,
    borderColor: COLORS.secondary,
    borderWidth: 1,
    marginTop: 8,
    paddingBottom: 4,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
  },
  container_swipable_content_left_info_size_container__text: {
    fontFamily: FONTS.fontFamilyBold,
    color: COLORS.secondary,
    fontSize: 14,
  },

  container_swipable_content_right: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  container_swipable_content_right__qty: {
    textAlign: 'center',
    marginRight: 4,
    color: COLORS.black3,
    fontSize: 24,
    fontFamily: FONTS.fontFamilyMedium,
    paddingBottom: 4,
    width: 32,
  },
  container_swipable_content_right__price: {
    fontFamily: FONTS.fontFamilyBold,
    color: COLORS.black3,
    fontSize: 16,
    paddingBottom: 8,
  },
});
