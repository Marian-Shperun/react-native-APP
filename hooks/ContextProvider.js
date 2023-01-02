import React, { useContext, useState, useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { Keyboard } from "react-native";

const ConnectingFontsContext = React.createContext();
const KeyboardStateContext = React.createContext();
const HidenKeyboardContext = React.createContext();
const AuthContext = React.createContext();

export const useConnectingFonts = () => {
  return useContext(HidenKeyboardContext);
};

export const useKeyboardState = () => {
  return useContext(KeyboardStateContext);
};

export const useHidenKeyboard = () => {
  return useContext(HidenKeyboardContext);
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export const ContextProvider = ({ children }) => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [isAuth, setIsAuth] = useState(false);

  const [fontsLoaded] = useFonts({
    "Roboto-Regulat": require("../assets/fonts/Roboto/Roboto-Regular.ttf"),
    "Roboto-Medium": require("../assets/fonts/Roboto/Roboto-Medium.ttf"),
    "Roboto-Bold": require("../assets/fonts/Roboto/Roboto-Bold.ttf"),
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
    <ConnectingFontsContext.Provider value={onLayoutRootView}>
      <KeyboardStateContext.Provider
        value={{ isShowKeyboard, setIsShowKeyboard }}
      >
        <HidenKeyboardContext.Provider value={keyboardHiden}>
          <AuthContext.Provider value={{ isAuth, setIsAuth }}>
            {children}
          </AuthContext.Provider>
        </HidenKeyboardContext.Provider>
      </KeyboardStateContext.Provider>
    </ConnectingFontsContext.Provider>
  );
};

export default ContextProvider;
