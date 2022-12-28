import React, { useState, useEffect } from "react";

import { View, Keyboard, Text } from "react-native";

import InputForm from "../InputForm";
import BottonForm from "../ButtonForm";

import { formAuthStyles } from "./style";

const FormAuth = ({ registration, title, stateAvatar, ...prop }) => {
  const {
    stateKeyboard: { isShowKeyboard, setIsShowKeyboard },
    keyboardHiden,
  } = prop;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isAuth, setIsAuth] = useState(false);

  const nameHandler = (text) => setName(text);
  const emailHandler = (text) => setEmail(text);
  const passwordHandler = (text) => setPassword(text);

  const submitHandler = () => {
    console.log(`email: ${email}`);
    console.log(`password: ${password}`);
    if (registration) console.log(`avatar: ${stateAvatar}`);

    keyboardHiden();
    setName("");
    setEmail("");
    setPassword("");
  };

  useEffect(() => {
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      setIsShowKeyboard(false);
    });
    return () => {
      hideSubscription.remove();
    };
  }, []);

  return (
    <View style={formAuthStyles.formInner}>
      <Text
        style={{
          ...formAuthStyles.formTitle,
          marginTop: registration ? 92 : 32,
        }}
      >
        {title}
      </Text>

      {registration && (
        <InputForm
          onFocus={() => setIsShowKeyboard(true)}
          value={name}
          onChangeText={nameHandler}
          placeholder="Логин"
        />
      )}
      <InputForm
        onFocus={() => setIsShowKeyboard(true)}
        keyboardType="email-address"
        value={email}
        onChangeText={emailHandler}
        placeholder="Адреса електронної пошти"
      />
      <InputForm
        onFocus={() => setIsShowKeyboard(true)}
        value={password}
        onChangeText={passwordHandler}
        placeholder="Пароль"
        password
      />
      {!isShowKeyboard && (
        <BottonForm
          title={registration ? "Реєструвати" : "Увійти "}
          onPress={submitHandler}
          textInfo={
            registration
              ? "Вже є обліковий запис? Увійти"
              : "Немає облікового запису? Зареєструйся"
          }
        />
      )}
    </View>
  );
};

export default FormAuth;
