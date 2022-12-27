import React, { useState, useEffect } from "react";

import { View, Keyboard, Image, Text } from "react-native";

import { Icon } from "@rneui/themed";
import BottonForm from "../../components/ButtonForm";
import InputForm from "../../components/InputForm";
import { styles } from "./style";

const img = "../../assets/ava.png";
const RegistrationScreen = ({ stateKeyboard, keyboardHiden }) => {
  const { isShowKeyboard, setIsShowKeyboard } = stateKeyboard;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState("");
  const [isAuth, setIsAuth] = useState(false);

  const nameHandler = (text) => setName(text);
  const emailHandler = (text) => setEmail(text);
  const passwordHandler = (text) => setPassword(text);

  const submitHandler = () => {
    console.log(`email: ${email}`);
    console.log(`password: ${password}`);
    console.log(`avatar: ${avatar}`);
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
    <View
      style={{
        ...styles.form,
        paddingBottom: isShowKeyboard ? 16 : 45,
      }}
    >
      <View style={styles.avatar}>
        <View style={styles.imgAvatar}>
          {avatar && (
            <Image
              source={require("../../assets/ava.png")}
              style={{ width: "100%", height: "100%" }}
            />
          )}
          <View style={styles.addAvatar}>
            {!avatar ? (
              <Icon
                name="add-circle-outline"
                type="ionicon"
                color="#FF6C00"
                onPress={() => {
                  setAvatar(img);
                }}
              />
            ) : (
              <Icon
                name="close-circle-outline"
                type="ionicon"
                color="#BDBDBD"
                onPress={() => setAvatar("")}
              />
            )}
          </View>
        </View>
      </View>
      <Text style={styles.formTitle}>Реєстрація</Text>

      <InputForm
        onFocus={() => setIsShowKeyboard(true)}
        value={name}
        onChangeText={nameHandler}
        placeholder="Логин"
      />
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
            Вже є обліковий запис? Увійти
          </Text>
        </>
      )}
    </View>
  );
};

export default RegistrationScreen;
