import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../../common/Theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: COLORS.lightGray,
  },
  container_list_item: {
    flex: 3,
  },
  //empty wishlist
  empty_wishlist_container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 16,
  },
  empty_wishlist_container__title: {
    fontFamily: FONTS.fontFamilyBold,
    color: COLORS.black3,
    textAlign: 'center',
    fontSize: 24,
    marginBottom: 16,
  },
  empty_wishlist_container__text: {
    fontFamily: FONTS.fontFamilyMedium,
    color: COLORS.black3,
    textAlign: 'center',
    fontSize: 16,
  },
  btn_shopping_empty_wishlist: {
    justifyContent: 'flex-end',
    marginVertical: 24,
    marginHorizontal: 16,
  },
  btn_shopping_empty_wishlist__title: {
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

  // render wishlist
  container__bg_overlay_delete_btn: {
    borderRadius: 24,
    margin: 8,
    backgroundColor: COLORS.red,
    height: 100,
    position: 'absolute',
    width: SIZES.width - 24, //24 = margin(8) chính nó + margin(8) của RenderRight + margin(8) của FlatList
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

  //content left
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
  container_swipable_content_left_info_size_and_price_container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  size_container: {
    width: 64,
    height: 32,
    borderColor: COLORS.secondary,
    borderWidth: 1,
    paddingBottom: 4,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
  },
  size_container__text: {
    fontFamily: FONTS.fontFamilyBold,
    color: COLORS.secondary,
    fontSize: 14,
  },
  price_text: {
    height: 32,
    fontFamily: FONTS.fontFamilySemiBold,
    color: COLORS.black3,
    fontSize: 20,
    paddingBottom: 8,
    marginLeft: 8,
  },

  //content right
  btn_add_to_cart: {
    width: 32,
    height: 32,
  },

  //render btn delete
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
  btn_delete_swipable__image: {
    width: 24,
    height: 24,
    tintColor: COLORS.white,
  },
  btn_delete_swipable__title: {
    fontFamily: FONTS.fontFamilyMedium,
    color: COLORS.white,
  },
});
