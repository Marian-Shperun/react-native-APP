import { View } from "react-native";

import FormAuth from "../../../components/Form/FormAuth";
import { useKeyboardState } from "../../../hooks/ContextProvider";

import { formAuthStyles } from "../../../components/Form/FormAuth/style";
import Container from "../../../components/Container";
const RegistrationScreen = (props) => {
  const { isShowKeyboard } = useKeyboardState();

  return (
    <View
      style={{
        ...formAuthStyles.form,
        paddingBottom: isShowKeyboard ? 16 : 45,
      }}
    >
      <FormAuth registration title="Реєстрація" {...props} />
    </View>
  );
};

export default RegistrationScreen;
