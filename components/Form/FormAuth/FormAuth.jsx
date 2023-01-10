import React, { useState, useEffect } from "react";

import { useDispatch } from "react-redux";
import {
  authSignUpUser,
  authSignInUser,
} from "../../../redux/auth/authOperations";
import {
  useHidenKeyboard,
  useKeyboardState,
} from "../../../hooks/ContextProvider";

import { View, Keyboard, Text, Platform } from "react-native";

import InputForm from "../InputForm";
import ButtonsForForm from "../../ButtonsForForm";

import { formAuthStyles } from "./style";
import Avatar from "../../Avatar";

import { IMGS } from "../../../constants";

const FormAuth = ({ registration, title, navigation }) => {
  // console.log(Platform.OS);
  const keyboardHiden = useHidenKeyboard();
  const keyboardState = useKeyboardState();

  const { isShowKeyboard, setIsShowKeyboard } = keyboardState;

  const [avatar, setStateAvatar] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
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
      dispatch(
        authSignUpUser(
          email,
          password,
          name,
          !avatar ? IMGS.defaultAvatar : avatar
        )
      );
    } else {
      dispatch(authSignInUser(email, password));
    }

    keyboardHiden();
    setName("");
    setEmail("");
    setPassword("");
    setStateAvatar("");
  };

  const getPhotoProfile = (photo) => {
    setStateAvatar(photo);
  };
  return (
    <View style={formAuthStyles.formInner}>
      {registration && <Avatar getPhotoProfile={getPhotoProfile} />}

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
