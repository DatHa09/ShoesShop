import {View, Text, Image} from 'react-native';
import React from 'react';
import {styles} from '../style/OrderHistoryScreenStyle';

export default function RenderOrder({orderItem}) {
  return (
    <View style={styles.container_render_order}>
      {/* image */}
      <Image
        source={{uri: orderItem.image}}
        style={styles.container_render_order__image}
      />
      {/* name, short description */}
      <View style={styles.container_render_order_info}>
        <Text style={styles.container_render_order_info__name}>
          {orderItem.name}
        </Text>
        <Text style={styles.container_render_order_info__short_description}>
          {orderItem.shortDescription.trim()}
        </Text>
      </View>
    </View>
  );
}
1;
