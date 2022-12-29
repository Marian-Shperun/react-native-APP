import {
  View,
  ImageBackground,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
} from "react-native";

import { IMGS } from "../../constants";

import { styles } from "./style";
const Container = ({ children, ...prop }) => {
  const { onLayoutRootView, keyboardHiden } = prop;

  return (
    <TouchableWithoutFeedback onPress={keyboardHiden}>
      <View style={styles.container} onLayout={onLayoutRootView}>
        <ImageBackground
          source={IMGS.imgBg}
          resizeMode="cover"
          style={styles.imgBg}
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
