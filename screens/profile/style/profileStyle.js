import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../../common/Theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray2,
  },
  title: {
    marginLeft: 32,
    fontFamily: FONTS.fontFamilySemiBold,
    color: COLORS.black3,
    fontSize: 32,
  },

  content_container: {
    flex: 1,
    marginHorizontal: 32,
  },

  profile_container: {
    backgroundColor: COLORS.white,
    marginTop: 16,
    padding: 16,
    backgroundColor: COLORS.secondary,
    borderRadius: 16,
    elevation: 16,
  },

  line: {
    marginTop: 24,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.secondary,
  },

  profile_container_content_center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  profile_container_content_center__name: {
    fontSize: 22,
    fontFamily: FONTS.fontFamilyBold,
    color: COLORS.black3,
  },

  profile_container_content_left: {
    marginTop: 8,
  },
  profile_container_content_left_email_container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  profile_container_content_left_email_container__image: {
    width: 24,
    height: 24,
  },
  profile_container_content_left_email_container__text: {
    marginLeft: 8,
    fontFamily: FONTS.fontFamilySemiBold,
    fontSize: 16,
    color: COLORS.black3,
  },

  profile_container_content_left_gender_container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  profile_container_content_left_gender_container__text: {
    marginLeft: 12,
    fontFamily: FONTS.fontFamilySemiBold,
    fontSize: 16,
    color: COLORS.black3,
  },

  profile_container_content_left_phone_container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profile_container_content_left_phone_container__text: {
    marginLeft: 12,
    fontFamily: FONTS.fontFamilySemiBold,
    fontSize: 16,
    color: COLORS.black3,
  },

  tag_profile_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    marginTop: 24,
    padding: 16,
    backgroundColor: COLORS.white,
    borderRadius: 16,
    // elevation: 16,
  },
  tag_profile_container_content_left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tag_profile_container_content_left__image: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  tag_profile_container_content_left__text: {
    fontFamily: FONTS.fontFamilySemiBold,
    fontSize: 22,
    color: COLORS.black3,
  },

  logout_color: {
    color: COLORS.red,
  },
  logout_icon_color: {
    tintColor: COLORS.red,
  },

  avatar: {
    width: 96,
    height: 96,
    borderRadius: 99,
  },
});
