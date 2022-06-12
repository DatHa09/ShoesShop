import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  ScrollView,
} from 'react-native';
import React from 'react';

import {styles} from './style/RegisterScreenStyle';
import {IMAGES} from '../../common/Images';
import RegisterForm from './components/RegisterForm';
export default function ProfileAndPasswordScreen() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground source={IMAGES.background2} style={{flex: 1}}>
          <View style={styles.container_background_overlay}>
            <View style={{marginBottom: 40}}>
              {/* TITLE */}
              <Text
                style={[
                  styles.title,
                  styles.text_secondary,
                  styles.marginLeft16,
                ]}>
                BECOME A DATO MEMBER
              </Text>
              <Text style={[styles.text, styles.marginLeft16]}>
                Complete the following data
              </Text>
              <Text style={[styles.text, styles.marginLeft16]}>
                to enter the shop
              </Text>
            </View>

            <View style={{flex: 3}}>
              <RegisterForm />
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
}
