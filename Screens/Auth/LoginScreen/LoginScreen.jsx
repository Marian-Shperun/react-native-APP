import { useState, useEffect } from "react";
import { View, Dimensions, KeyboardAvoidingView } from "react-native";

import FormAuth from "../../../components/FormAuth";

import { formAuthStyles } from "../../../components/FormAuth/style";

const LoginScreen = ({ ...prop }) => {
  const { isShowKeyboard } = prop.stateKeyboard;

  // const [dimensions, setDimensions] = useState(
  //   Dimensions.get("window").width - 20 * 2
  // );

  // useEffect(() => {
  //   const onChange = () => {
  //     const width = Dimensions.get("window").width - 20 * 2;
  //     setDimensions(width);
  //   };
  //   Dimensions.addEventListener("change", onChange);

  //   return () => {
  //     Dimensions.removeEventListener("change", onChange);
  //   };
  // }, []);
  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "0"}>
      <View
        style={{
          ...formAuthStyles.form,
          // width: dimensions,
          paddingBottom: isShowKeyboard ? 16 : 111,
        }}
      >
        <FormAuth title="Увійти" {...prop} />
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
