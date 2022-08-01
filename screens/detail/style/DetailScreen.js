import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../../common/Theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container_info: {
    flex: 1,
    backgroundColor: COLORS.lightGray,
  },
  container_info_image_container: {
    flex: 1,
    width: '100%',
  },
  container_info_image_container_image: {
    width: '100%',
    height: 272,
  },
  container_info_image_container_image_featured: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    marginLeft: 16,
    marginBottom: 8,
    backgroundColor: COLORS.black3,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 99,
  },
  container_info_image_container_image_featured__text: {
    fontFamily: FONTS.fontFamilyBold,
    color: COLORS.secondary,
  },
  container_info_image_container_image_like: {
    position: 'absolute',
    right: 0,
    top: 0,
    marginRight: 16,
    marginBottom: 16,
  },
  container_info_image_container_image_like__icon: {
    width: 32,
    height: 32,
  },

  //detail info
  container_info_detail_info: {
    flex: 2,
    width: '100%',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    backgroundColor: COLORS.white,
  },

  //product_name
  container_info_detail_info__product_name: {
    fontFamily: FONTS.fontFamilyBold,
    color: COLORS.secondary,
    fontSize: 32,
    paddingLeft: 16,
    marginBottom: 16,
  },

  //size
  container_info_detail_info_size: {
    marginBottom: 16,
  },
  container_info_detail_info_size__title: {
    fontFamily: FONTS.fontFamilySemiBold,
    color: COLORS.black3,
    fontSize: 24,
    paddingLeft: 16,
    marginBottom: 8,
  },

  //description
  container_info_detail_info_description__title: {
    fontFamily: FONTS.fontFamilySemiBold,
    color: COLORS.black3,
    fontSize: 24,
    paddingLeft: 16,
    marginBottom: 8,
  },
  container_info_detail_info_description__content: {
    fontFamily: FONTS.fontFamilyRegular,
    color: COLORS.black3,
    fontSize: 16,
    paddingLeft: 24,
  },

  //related products
  container_info_detail_info__related_products_title: {
    fontFamily: FONTS.fontFamilySemiBold,
    color: COLORS.black3,
    fontSize: 24,
    paddingLeft: 16,
    marginBottom: 8,
  },

  //button add and price
  btn_buy_and_price_container: {
    height: 160,
    justifyContent: 'flex-end',
    backgroundColor: COLORS.lightGray,
    paddingHorizontal: 16,
  },
  price_info: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.secondary,
  },
  price_info__title: {
    fontFamily: FONTS.fontFamilySemiBold,
    color: COLORS.black3,
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
  price_info__content: {
    fontFamily: FONTS.fontFamilySemiBold,
    color: COLORS.black3,
    fontSize: 24,
    marginBottom: 16,
  },
  btn_buy: {
    justifyContent: 'flex-end',
    marginVertical: 24,
  },
  btn_buy__title: {
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
});
