import {
  View,
  ImageBackground,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
} from "react-native";

import {
  useHidenKeyboard,
  useConnectingFonts,
} from "../../hooks/ContextProvider";

import { IMGS } from "../../constants";

import { styles } from "./style";

const Container = ({ children, bgNone }) => {
  const keyboardHiden = useHidenKeyboard();
  const onLayoutRootView = useConnectingFonts();

  return (
    <TouchableWithoutFeedback onPress={keyboardHiden}>
      <View style={styles.container}>
        <ImageBackground
          source={bgNone ? "" : IMGS.imgBg}
          resizeMode="cover"
          style={{
            ...styles.imgBg,
            flex: bgNone ? 0 : 1,
          }}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "0"}
          >
            {children}
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Container;
