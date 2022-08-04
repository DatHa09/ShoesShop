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
import {styles} from './style/OrderHistoryScreenStyle';

export default function OrderHistoryScreen() {
  const profileData = useSelector(state => state.profileReducer.profile);
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

  const emptyOrderHistory = () => {
    return (
      <View style={styles.container_empty_order}>
        <Image source={IMAGES.orders_not_found} />
        <Text style={styles.container_empty_order__title}>
          There is no order history yet.
        </Text>
        <Text style={styles.container_empty_order__text}>
          When you checkout,{'\n'} your order will be saved here.
        </Text>
      </View>
    );
  };

  const onPressDeleteItem = id => {
    setModalVisible(true);
    setChangeOrderId(id);
    setChangeMessage(`Do you really want to delete order #${id}?`);
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
      <View style={styles.container}>
        <SectionList
          showsVerticalScrollIndicator={false}
          sections={newProfileData}
          keyExtractor={(item, index) => item + index}
          ListEmptyComponent={() => emptyOrderHistory()}
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
            style={styles.btn_shopping_empty_order_history}>
            <Text style={styles.btn_shopping_empty_order_history__title}>
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
