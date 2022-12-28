import { Text } from "react-native";
import { Button } from "@rneui/themed";
import { formAuthStyles } from "./FormAuth/style";

const ButtonForm = ({ title, onPress, textInfo }) => {
  return (
    <>
      <Button
        title={title}
        titleStyle={{
          fontFamily: "Roboto-Regulat",
          fontSize: 16,
          lineHeight: 19,
        }}
        buttonStyle={{
          marginTop: 27,
          padding: 16,
          color: "#FFFFF",
          backgroundColor: "#FF6C00",
          borderRadius: 100,
        }}
        onPress={onPress}
      />

      <Text style={formAuthStyles.formTextInfo}>{textInfo}</Text>
    </>
  );
};

export default ButtonForm;
