import React, { useState } from "react";

import { View } from "react-native";

import FormAuth from "../../../components/FormAuth";

import { formAuthStyles } from "../../../components/FormAuth/style";

const RegistrationScreen = ({ ...prop }) => {
  const { isShowKeyboard } = prop.stateKeyboard;

  return (
    <View
      style={{
        ...formAuthStyles.form,
        paddingBottom: isShowKeyboard ? 16 : 45,
      }}
    >
      <FormAuth registration title="Реєстрація" {...prop} />
    </View>
  );
};

export default RegistrationScreen;
