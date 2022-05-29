import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
// import {useNavigation} from '@react-navigation/native';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faUser,
  faUnlock,
  faEye,
  faEyeSlash,
} from '@fortawesome/free-solid-svg-icons';

import {styles} from './styles/LoginStyles';
import {IMAGES} from '../../common/Images';
import {COLORS} from '../../common/Theme';
import {screens} from '../../common/Contants';
export default function LoginScreen({navigation}) {
  const [isHide, setIsHide] = useState(true);

  // const navigation = useNavigation();

  const onPressRegister = () => {
    // navigation.navigate(screens.register);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={IMAGES.background}
        style={styles.container_background_image}>
        <View style={styles.container_background_overlay}>
          {/* TITLE */}
          <View style={styles.text_container}>
            <Text style={[styles.text_secondary, styles.title]}>
              Welcome To Dato
            </Text>
          </View>
          {/* INPUT */}
          <View style={styles.input_container}>
            <View style={styles.input_container__input}>
              <FontAwesomeIcon icon={faUser} />
              <TextInput
                placeholder={`Email`}
                placeholderTextColor="#fff"
                style={[styles.input, styles.text]}
              />
            </View>
            <View style={styles.input_container__input}>
              <FontAwesomeIcon icon={faUnlock} />

              <TextInput
                secureTextEntry={isHide}
                placeholder={`Password`}
                placeholderTextColor="#FFF"
                style={[styles.input, styles.text]}
              />
              <TouchableOpacity onPress={() => setIsHide(!isHide)}>
                <FontAwesomeIcon icon={isHide ? faEyeSlash : faEye} />
              </TouchableOpacity>
            </View>
          </View>
          {/* BUTTON SIGN IN */}
          <TouchableOpacity
            onPress={() => onPressRegister()}
            style={[styles.btn, styles.btn_sign_in__shadow]}>
            <Text style={styles.btn_sign_in}>SIGN IN</Text>
          </TouchableOpacity>

          <View style={styles.text_container}>
            {/* REGISTER */}
            <View style={styles.text_sign_up}>
              <Text style={styles.text_gray}>Not a member?</Text>
              <TouchableOpacity onPress={() => onPressRegister()}>
                <Text style={styles.text_secondary}> REGISTER </Text>
              </TouchableOpacity>
              <Text style={styles.text_gray}>here.</Text>
            </View>

            {/* FORGOT PASSWORD */}
            <View style={styles.forgot_password}>
              <TouchableOpacity>
                <Text style={styles.text_secondary}>Forgot Password?</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
