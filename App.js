import React, { useState, useEffect } from "react";
import * as Font from "expo-font";
import { AppLoading } from "expo";

import {
  ImageBackground,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";

import RegistrationScreen from "./Screens/RegistrationScreen";
import LoginScreen from "./Screens/LoginScreen";

import { styles } from "./style";

const imgBg = require("./assets/App_BG.png");

// const loadFonts = async () => {
//   await Font.loadAsync({
//     "Roboto-Regulat": require("./assets/fonts/Roboto/Roboto-Regular.ttf"),
//     "Roboto-Medium": require("./assets/fonts/Roboto/Roboto-Medium.ttf"),
//     "Roboto-Bold": require("./assets/fonts/Roboto/Roboto-Bold.ttf"),
//   });
// };
export default function App() {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [isReady, setIsReady] = useState(false);

  // if (!isReady) {
  //   return (
  //     <AppLoading startAsync={loadFonts} onFinish={() => setIsReady(true)} />
  //   );
  // }
  const keyboardHiden = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };
  return (
    <TouchableWithoutFeedback onPress={keyboardHiden}>
      <View style={styles.container}>
        <ImageBackground source={imgBg} resizeMode="cover" style={styles.imgBg}>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "0"}
          >
            <LoginScreen
              stateKeyboard={{ isShowKeyboard, setIsShowKeyboard }}
              keyboardHiden={keyboardHiden}
            />
            {/* <RegistrationScreen
              stateKeyboard={{ isShowKeyboard, setIsShowKeyboard }}
              keyboardHiden={keyboardHiden}
            /> */}
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}
