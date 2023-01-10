import {
  View,
  ImageBackground,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
} from "react-native";

import { useHidenKeyboard } from "../../hooks/ContextProvider";

import { IMGS } from "../../constants";

import { styles } from "./style";

const Container = ({ children, bgNone }) => {
  const keyboardHiden = useHidenKeyboard();

  return (
    <TouchableWithoutFeedback onPress={keyboardHiden}>
      <View style={styles.container}>
        <ImageBackground source={bgNone ? "" : IMGS.imgBg} style={styles.imgBg}>
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
