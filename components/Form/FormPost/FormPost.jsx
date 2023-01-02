import { useState, useEffect } from "react";

import { Button } from "@rneui/themed";
import { View, Platform, Keyboard } from "react-native";
import { COLORS } from "../../../constants";

import { useKeyboardState } from "../../../hooks/ContextProvider";
import InputForm from "../../../components/Form/InputForm";
import { styles } from "./style";

const FormPost = ({ stateImg }) => {
  console.log(Platform.OS);
  const { isImg, setIsImg } = stateImg;
  const { isShowKeyboard, setIsShowKeyboard } = useKeyboardState();
  const [namePost, setNamePost] = useState("");
  const [addLocation, setAddLocation] = useState("");

  useEffect(() => {
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      setIsShowKeyboard(false);
    });
    console.log(isShowKeyboard);

    return () => {
      hideSubscription.remove();
    };
  }, []);

  const namePostHandler = (text) => setNamePost(text);
  const addLocationHandler = (text) => setAddLocation(text);

  const submitHandler = () => {
    if (isImg === "" || namePost === "" || addLocation == "") {
      return;
    }
    console.log(`name post: ${namePost}`);
    console.log(`location: ${addLocation}`);
    console.log(`photo post: ${isImg}`);

    // keyboardHiden();
    setNamePost("");
    setAddLocation("");
    setIsImg("");
  };

  return (
    <View style={{ marginTop: 32, marginBottom: 16 }}>
      <InputForm
        onFocus={() => setIsShowKeyboard(true)}
        value={namePost}
        onChangeText={namePostHandler}
        placeholder="Назва..."
        inputPost
      />
      <InputForm
        onFocus={() => setIsShowKeyboard(true)}
        value={addLocation}
        onChangeText={addLocationHandler}
        placeholder="Місцевість"
        inputPost
        location
      />

      {!isShowKeyboard && (
        <Button
          title="Опублікувати"
          titleStyle={{ color: isImg ? COLORS.white : "#BDBDBD" }}
          buttonStyle={{
            width: "100%",
            height: 60,
            backgroundColor: isImg ? COLORS.akcent : `#F6F6F6`,
            borderRadius: 100,
            zIndex: 5,
          }}
          onPress={submitHandler}
        />
      )}
    </View>
  );
};

export default FormPost;
