import {
  View,
  Text,
  SectionList,
  FlatList,
  Modal,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import AppBarProduct from '../../common/AppBarProduct';
import {screens} from '../../common/Contants';
import {COLORS, FONTS} from '../../common/Theme';
import {useDispatch, useSelector} from 'react-redux';
import {deleteOrder, getProfile} from '../profile/profileScreenThunk';
import RenderOrder from './components/RenderOrder';
import RenderHeader from './components/RenderHeader';
import {globalStyles} from '../../common/style/globalStyle';
import {
  faCheck,
  faTriangleExclamation,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {ICONS, IMAGES} from '../../common/Images';
import {useNavigation} from '@react-navigation/native';

export default function OrderHistoryScreen() {
  const profileData = useSelector(state => state.profileReducer.profile);
  console.log('~ profileData', profileData.ordersHistory);
  const token = useSelector(state => state.loginReducer.accessToken);
  const countProfile = useSelector(state => state.profileReducer.count);
  const countCartChange = useSelector(state => state.cartReducer.count);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = useState(false);
  const [orderId, setChangeOrderId] = useState(0);
  const [message, setChangeMessage] = useState('');

  useEffect(() => {
    dispatch(getProfile(token));
  }, [countProfile]);

  // useEffect(() => {
  //   getProfile(token);
  //   console.log('countCartChange ', countCartChange);
  // }, [countCartChange]);

  //đổi tên key orderDetail thành data cho đúng format rồi mới sử dụng sectionList
  const newProfileData = profileData.ordersHistory
    .map((profileItem, index) => ({
      id: profileItem.id,
      date: profileItem.date,
      status: profileItem.status,
      email: profileItem.email,
      alias: profileItem.alias,
      data: [...profileItem.orderDetail],
    }))
    .reverse();

  const emptyWishList = () => {
    return (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginHorizontal: 16,
        }}>
        <Image source={IMAGES.orders_not_found} />
        <Text
          style={{
            fontFamily: FONTS.fontFamilyBold,
            color: COLORS.black3,
            textAlign: 'center',
            fontSize: 24,
            marginBottom: 16,
          }}>
          There is no order history yet.
        </Text>
        <Text
          style={{
            fontFamily: FONTS.fontFamilyMedium,
            color: COLORS.black3,
            textAlign: 'center',
            fontSize: 16,
          }}>
          When you checkout,{'\n'} your order will be saved here.
        </Text>
      </View>
    );
  };

  const onPressDeleteItem = id => {
    setModalVisible(true);
    setChangeOrderId(id);
    setChangeMessage('Do you really want to delete this order?');
  };

  const confirmDelete = () => {
    setModalVisible(!modalVisible);
    const dataUpdateProfile = {
      token: token,
      orderId: orderId,
    };
    dispatch(deleteOrder(dataUpdateProfile));
  };

  return (
    <>
      <AppBarProduct idScreen={screens.order_history_screen} />
      <View style={{flex: 1, backgroundColor: COLORS.lightGray2}}>
        <SectionList
          showsVerticalScrollIndicator={false}
          sections={newProfileData}
          keyExtractor={(item, index) => item + index}
          ListEmptyComponent={() => emptyWishList()}
          renderItem={({item, index}) => {
            return <RenderOrder key={item.name + index} orderItem={item} />;
          }}
          renderSectionHeader={({section}) => {
            const index = newProfileData.indexOf(section);
            return (
              <RenderHeader
                section={section}
                onPressDeleteItem={onPressDeleteItem}
                index={index}
              />
            );
          }}
        />
        {profileData.ordersHistory.length === 0 && (
          <TouchableOpacity
            onPress={() => navigation.navigate(screens.home_screen)}
            style={{
              justifyContent: 'flex-end',
              marginVertical: 24,
              marginHorizontal: 16,
            }}>
            <Text
              style={{
                textAlign: 'center',
                padding: 4,
                paddingTop: 8,
                borderRadius: 8,
                fontFamily: FONTS.fontFamilySemiBold,
                color: COLORS.black3,
                fontSize: 18,
                backgroundColor: COLORS.secondary,
                height: 48,
              }}>
              Shopping now
            </Text>
          </TouchableOpacity>
        )}
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={globalStyles.centeredView}>
          <View
            style={[
              globalStyles.modalView,
              {
                backgroundColor: COLORS.backgroundWarning,
                borderColor: COLORS.borderWarning,
              },
            ]}>
            <View style={globalStyles.modalView_container}>
              <FontAwesomeIcon
                icon={faTriangleExclamation}
                color={COLORS.red}
                size={24}
                style={{marginRight: 12}}
              />
              <Text style={globalStyles.modalText}>{message}</Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
              <TouchableOpacity
                style={[
                  globalStyles.button,
                  globalStyles.buttonClose,
                  {backgroundColor: COLORS.lightGray4},
                ]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={globalStyles.textStyle}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  globalStyles.button,
                  globalStyles.buttonDelete,
                  {marginLeft: 8},
                ]}
                onPress={() => confirmDelete()}>
                <Text style={globalStyles.textStyle}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
}
