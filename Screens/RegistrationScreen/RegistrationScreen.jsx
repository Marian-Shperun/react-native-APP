import React, { useState } from "react";

import { View } from "react-native";

import Avatar from "../../components/Avatar";
import FormAuth from "../../components/FormAuth";

import { formAuthStyles } from "../../components/FormAuth/style";


const RegistrationScreen = ({ ...prop }) => {
  const { isShowKeyboard } = prop.stateKeyboard;

  const [stateAvatar, setStateAvatar] = useState("");

  return (
    <View
      style={{
        ...formAuthStyles.form,
        paddingBottom: isShowKeyboard ? 16 : 45,
      }}
    >
      <Avatar state={{ stateAvatar, setStateAvatar }} />

      <FormAuth
        registration
        title="Реєстрація"
        stateAvatar={stateAvatar}
        {...prop}
      />
    </View>
  );
};

export default RegistrationScreen;
