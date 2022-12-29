import React, { useState, useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import { Keyboard } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Container from "./components/Container";
import LoginScreen from "./Screens/Auth/LoginScreen";
import RegistrationScreen from "./Screens/Auth/RegistrationScreen";
import Home from "./Screens/Home";

const AuthStack = createNativeStackNavigator();

export default function App() {
  const [isAuth, setIsAuth] = useState(true);

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
    <NavigationContainer>
      <AuthStack.Navigator>
        <AuthStack.Screen options={{ headerShown: false }} name="Login">
          {(props) => (
            <Container
              keyboardHiden={keyboardHiden}
              onLayoutRootView={onLayoutRootView}
            >
              <LoginScreen
                navigation={props.navigation}
                stateKeyboard={{ isShowKeyboard, setIsShowKeyboard }}
                keyboardHiden={keyboardHiden}
              />
            </Container>
          )}
        </AuthStack.Screen>

        <AuthStack.Screen options={{ headerShown: false }} name="Register">
          {(props) => (
            <Container
              keyboardHiden={keyboardHiden}
              onLayoutRootView={onLayoutRootView}
            >
              <RegistrationScreen
                navigation={props.navigation}
                stateKeyboard={{ isShowKeyboard, setIsShowKeyboard }}
                keyboardHiden={keyboardHiden}
              />
            </Container>
          )}
        </AuthStack.Screen>
        <AuthStack.Screen name="Home" component={Home} />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
}
