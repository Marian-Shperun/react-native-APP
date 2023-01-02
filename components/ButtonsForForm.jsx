import { TouchableOpacity, Text } from "react-native";
import { Button } from "@rneui/themed";

import { COLORS } from "../constants";
import { formAuthStyles } from "./Form/FormAuth/style";

const ButtonsForForm = ({ title, submitHandler, textInfo, navHandle }) => {
  return (
    <>
      <Button
        title={title}
        titleStyle={{
          fontFamily: "Roboto-Regulat",
          fontSize: 16,
          lineHeight: 19,
          color: `${COLORS.white}`,
        }}
        buttonStyle={{
          marginTop: 27,
          padding: 16,
          backgroundColor: `${COLORS.akcent}`,
          borderRadius: 100,
        }}
        onPress={submitHandler}
      />
      <TouchableOpacity style={{ marginTop: 16 }} onPress={navHandle}>
        <Text style={formAuthStyles.formTextInfo}>{textInfo}</Text>
      </TouchableOpacity>
    </>
  );
};

export default ButtonsForForm;
