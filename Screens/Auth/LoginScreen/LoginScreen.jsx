import { View, Dimensions, KeyboardAvoidingView } from "react-native";

import FormAuth from "../../../components/Form/FormAuth";

import { formAuthStyles } from "../../../components/Form/FormAuth/style";
import { useKeyboardState } from "../../../hooks/ContextProvider";

const LoginScreen = (props) => {
  const { isShowKeyboard } = useKeyboardState();

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
    <View
      style={{
        ...formAuthStyles.form,
        // width: dimensions,
        paddingBottom: isShowKeyboard ? 16 : 111,
      }}
    >
      <FormAuth title="Увійти" {...props} />
    </View>
  );
};

export default LoginScreen;
