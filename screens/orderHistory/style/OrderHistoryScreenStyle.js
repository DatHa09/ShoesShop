import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../../common/Theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray2,
  },

  //render header
  container_render_header: {
    flex: 1,
    marginBottom: 2,
    paddingHorizontal: 16,
    paddingTop: 4,
    paddingBottom: 8,
    backgroundColor: COLORS.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  //content left
  container_render_header_content_left__date_text: {
    fontFamily: FONTS.fontFamilyBold,
    fontSize: 20,
    color: COLORS.black3,
  },
  container_render_header_content_left_id_status: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  order_id_title: {
    fontFamily: FONTS.fontFamilyBold,
    fontSize: 18,
    color: COLORS.secondary,
    marginRight: 8,
    paddingBottom: 4,
  },
  order_status_title: {
    fontFamily: FONTS.fontFamilyBold,
    fontSize: 12,
    color: COLORS.black3,
    backgroundColor: COLORS.secondary,
    borderRadius: 99,
    paddingHorizontal: 8,
    paddingTop: 4,
    paddingBottom: 8,
  },

  //content right
  container_render_header_content_right__btn_delete: {
    width: 24,
    height: 24,
    tintColor: COLORS.red,
  },
  container_render_header_payment_method: {
    backgroundColor: COLORS.white,
    paddingLeft: 16,
  },
  container_render_header_payment_method__text: {
    fontFamily: FONTS.fontFamilyBold,
    fontSize: 14,
    color: COLORS.secondary,
  },

  //render order
  container_render_order: {
    marginTop: 2,
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    paddingBottom: 4,
  },
  container_render_order__image: {
    width: 100,
    height: 100,
  },
  container_render_order_info: {
    width: SIZES.width - 110,
    marginLeft: 8,
  },
  container_render_order_info__name: {
    fontFamily: FONTS.fontFamilyBold,
    color: COLORS.black3,
    fontSize: 16,
    marginTop: 4,
    marginBottom: 8,
  },
  container_render_order_info__short_description: {
    color: COLORS.black3,
    fontSize: 16,
    paddingRight: 8,
  },

  //empty order history
  container_empty_order: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 16,
  },
  container_empty_order__title: {
    fontFamily: FONTS.fontFamilyBold,
    color: COLORS.black3,
    textAlign: 'center',
    fontSize: 24,
    marginBottom: 16,
  },
  container_empty_order__text: {
    fontFamily: FONTS.fontFamilyMedium,
    color: COLORS.black3,
    textAlign: 'center',
    fontSize: 16,
  },

  btn_shopping_empty_order_history: {
    justifyContent: 'flex-end',
    marginVertical: 24,
    marginHorizontal: 16,
  },
  btn_shopping_empty_order_history__title: {
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
});
