import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {StackActions, useNavigation} from '@react-navigation/native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faArrowRightFromBracket,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import {COLORS, FONTS} from '../../common/Theme';
import {ICONS, IMAGES} from '../../common/Images';
import {screens} from '../../common/Contants';
import {useSelector} from 'react-redux';
export default function CustomDrawerContent({navigation}) {
  const [currentTab, setCurrentTab] = useState(screens.tab_home);

  const profileData = useSelector(state => state.loginReducer.profile);

  // const navigation = useNavigation();

  useEffect(() => {
    navigation.navigate(currentTab);
  }, [currentTab]);

  const onSelectedMenu = title => {
    setCurrentTab(title);
  };

  const onCloseMenu = () => {
    navigation.closeDrawer();
    // navigation.
  };

  const onSignOut = () => {
    // navigation.navigate(screens.login_screen);
    // if (navigation.canGoBack()) {
    //   navigation.dispatch(StackActions.pop(1));
    // }
    // navigation.dispatch(StackActions.replace(screens.login_screen));
    navigation.dispatch(StackActions.replace(screens.login_screen));
  };

  //multiple buttons...
  const TabButton = (currentTab, title, image) => {
    return (
      <TouchableOpacity onPress={() => onSelectedMenu(title)}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingVertical: 8,
            backgroundColor:
              currentTab === title ? COLORS.secondary : 'transparent',
            paddingLeft: 16,
            paddingRight: 56,
            borderRadius: 8,
            marginTop: 8,
            width: 200,
          }}>
          <Image
            source={image}
            style={{
              width: 32,
              height: 32,
              tintColor:
                currentTab === title ? COLORS.black3 : COLORS.secondary,
            }}
          />
          <Text
            style={{
              fontSize: 16,
              fontFamily: FONTS.fontFamilyBold,
              paddingLeft: 16,
              color: currentTab === title ? COLORS.black3 : COLORS.secondary,
            }}>
            {title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <DrawerContentScrollView
      scrollEnabled={true}
      contentContainerStyle={{flex: 1}}>
      <View
        style={{
          flex: 1,
        }}>
        {/* Close */}
        <View
          style={{
            alignItems: 'flex-start',
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={() => onCloseMenu()}>
            <FontAwesomeIcon
              icon={faXmark}
              color={COLORS.secondary}
              size={32}
            />
          </TouchableOpacity>
        </View>

        {/* Home */}
        <View>
          <Image
            source={IMAGES.avatar_url}
            style={{width: 96, height: 96, borderRadius: 99, marginTop: 8}}
          />
          <Text
            style={{
              fontSize: 24,
              fontFamily: FONTS.fontFamilyBold,
              color: COLORS.secondary,
              marginTop: 16,
            }}>
            {profileData.name}
          </Text>
          <View>
            <Text
              style={{
                fontFamily: FONTS.fontFamilyBold,
                color: COLORS.secondary,
                marginTop: 8,
              }}>
              {profileData.email}
            </Text>
          </View>
        </View>

        {/* Drawer Items */}
        <View
          style={{
            flex: 1,
            marginTop: 32,
          }}>
          {TabButton(currentTab, screens.tab_home, ICONS.home)}
          {TabButton(
            currentTab,

            screens.tab_profile,
            ICONS.profile,
          )}
          {TabButton(currentTab, screens.tab_order, ICONS.order)}
          {TabButton(currentTab, screens.tab_like, ICONS.heart)}
          {TabButton(
            currentTab,

            screens.tab_notifications,
            ICONS.notification,
          )}
          {TabButton(
            currentTab,

            screens.tab_settings,
            ICONS.setting,
          )}
        </View>
        {/* Logout */}
        <TouchableOpacity
          onPress={() => onSignOut()}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingVertical: 8,
            backgroundColor: COLORS.transparent,
            paddingLeft: 24,
            paddingRight: 56,
            borderRadius: 8,
            marginTop: 16,
          }}>
          <FontAwesomeIcon
            icon={faArrowRightFromBracket}
            color={COLORS.secondary}
            size={24}
          />
          <Text
            style={{
              fontSize: 16,
              fontFamily: FONTS.fontFamilyBold,
              color: COLORS.secondary,
              paddingLeft: 16,
            }}>
            Sign Out
          </Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
}
