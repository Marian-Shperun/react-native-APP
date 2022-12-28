import React, { useState, useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

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

export default function App() {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [fontsLoaded] = useFonts({
    "Roboto-Regulat": require("./assets/fonts/Roboto/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto/Roboto-Medium.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto/Roboto-Bold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  const keyboardHiden = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };
  return (
    <TouchableWithoutFeedback onPress={keyboardHiden}>
      <View style={styles.container} onLayout={onLayoutRootView}>
        <ImageBackground source={imgBg} resizeMode="cover" style={styles.imgBg}>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "0"}
          >
            {/* <LoginScreen
              stateKeyboard={{ isShowKeyboard, setIsShowKeyboard }}
              keyboardHiden={keyboardHiden}
            /> */}
            <RegistrationScreen
              stateKeyboard={{ isShowKeyboard, setIsShowKeyboard }}
              keyboardHiden={keyboardHiden}
            />
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}
