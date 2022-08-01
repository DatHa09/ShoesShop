import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import moment from 'moment';
import 'moment/locale/en-gb';
import {ICONS} from '../../../common/Images';
import {styles} from '../style/OrderHistoryScreenStyle';

export default function RenderHeader({section, onPressDeleteItem, index}) {
  const date = moment(section.date).format('LL');

  return (
    <>
      <View
        style={[
          styles.container_render_header,
          {
            marginTop: index === 0 ? 0 : 16,
          },
        ]}>
        {/* content left */}
        <View>
          {/* date */}
          <Text style={styles.container_render_header_content_left__date_text}>
            {date}
          </Text>
          {/* orderId, status */}
          <View style={styles.container_render_header_content_left_id_status}>
            <Text style={styles.order_id_title}>#{section.id}</Text>
            <Text style={styles.order_status_title}>Processing...</Text>
          </View>
        </View>

        {/* content right */}
        {/* delete */}
        <TouchableOpacity
          onPress={() => {
            onPressDeleteItem(section.id);
          }}>
          <Image
            source={ICONS.trash}
            style={styles.container_render_header_content_right__btn_delete}
          />
        </TouchableOpacity>
      </View>

      {/* payment method */}
      <View style={styles.container_render_header_payment_method}>
        <Text style={styles.container_render_header_payment_method__text}>
          Paid by cash on delivery
        </Text>
      </View>
    </>
  );
}
