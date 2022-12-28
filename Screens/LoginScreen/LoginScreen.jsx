import { View } from "react-native";

import FormAuth from "../../components/FormAuth";

import { formAuthStyles } from "../../components/FormAuth/style";

const LoginScreen = ({ ...prop }) => {
  const { isShowKeyboard } = prop.stateKeyboard;

  return (
    <View
      style={{
        ...formAuthStyles.form,
        paddingBottom: isShowKeyboard ? 16 : 111,
      }}
    >
      <FormAuth title="Увійти" {...prop} />
    </View>
  );
};

export default LoginScreen;
