import React, { useState, useEffect } from "react";

import { View, Text, Keyboard } from "react-native";

import BottonForm from "../../components/ButtonForm";

import InputForm from "../../components/InputForm";

import { styles } from "./style";

const LoginScreen = ({ stateKeyboard, keyboardHiden }) => {
  const { isShowKeyboard, setIsShowKeyboard } = stateKeyboard;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailHandler = (text) => setEmail(text);
  const passwordHandler = (text) => setPassword(text);

  const submitHandler = () => {
    console.log(`email: ${email}`);
    console.log(`password: ${password}`);
    keyboardHiden();
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
    <View
      style={{
        ...styles.form,
        paddingBottom: isShowKeyboard ? 16 : 111,
      }}
    >
      <Text style={styles.formTitle}>Увійти</Text>

      <View style={styles.formInner}>
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
          <>
            <BottonForm title="Зарегистрироваться" onPress={submitHandler} />

            <Text style={styles.text}>
              Немає облікового запису? Зареєструйся
            </Text>
          </>
        )}
      </View>
    </View>
  );
};

export default LoginScreen;
