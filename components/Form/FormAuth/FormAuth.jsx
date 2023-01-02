import React, { useState, useEffect } from "react";

import { View, Keyboard, Text, Platform } from "react-native";

import InputForm from "../InputForm";
import ButtonsForForm from "../../ButtonsForForm";

import {
  useHidenKeyboard,
  useKeyboardState,
  useAuth,
} from "../../../hooks/ContextProvider";

import { formAuthStyles } from "./style";
import Avatar from "../../Avatar";

const FormAuth = ({ registration, title, navigation }) => {
  // console.log(Platform.OS);
  const keyboardHiden = useHidenKeyboard();
  const keyboardState = useKeyboardState();
  const { setIsAuth } = useAuth();

  const { isShowKeyboard, setIsShowKeyboard } = keyboardState;

  const [stateAvatar, setStateAvatar] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      setIsShowKeyboard(false);
    });
    return () => {
      hideSubscription.remove();
    };
  }, []);

  const nameHandler = (text) => setName(text);
  const emailHandler = (text) => setEmail(text);
  const passwordHandler = (text) => setPassword(text);

  const submitHandler = () => {
    if (registration) {
      console.log(`login: ${name}`);
      console.log(`avatar: ${stateAvatar}`);
    }
    console.log(`email: ${email}`);
    console.log(`password: ${password}`);

    keyboardHiden();
    setName("");
    setEmail("");
    setPassword("");

    setIsAuth(true);
    // navigation.navigate("Home");
  };

  return (
    <View style={formAuthStyles.formInner}>
      {registration && <Avatar state={{ stateAvatar, setStateAvatar }} />}

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
          placeholder="Логін"
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
        <ButtonsForForm
          title={registration ? "Реєструвати" : "Увійти "}
          submitHandler={submitHandler}
          navHandle={() => {
            navigation.navigate(registration ? "Login" : "Register");
          }}
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
