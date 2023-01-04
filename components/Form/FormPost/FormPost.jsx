import { useState, useEffect } from "react";
// import { v1 as uuidv1 } from "uuid";
import { Icon } from "@rneui/themed";

import { Button } from "@rneui/themed";
import { View, Platform, Keyboard, Dimensions } from "react-native";
import { COLORS, IMGS } from "../../../constants";

import { useKeyboardState } from "../../../hooks/ContextProvider";
import InputForm from "../../../components/Form/InputForm";

import { AntDesign } from "@expo/vector-icons";
import { styles } from "./style";

const FormPost = ({ stateImg, navigation, city, location }) => {
  // console.log(Platform.OS);
  // console.log("navigation->>", navigation);
  const heightDisplay = Dimensions.get("window").height;

  const { isImg, setIsImg } = stateImg;
  const { isShowKeyboard, setIsShowKeyboard } = useKeyboardState();
  const [namePost, setNamePost] = useState("");
  const [addLocation, setAddLocation] = useState("");

  useEffect(() => {
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      setIsShowKeyboard(false);
    });

    return () => {
      hideSubscription.remove();
    };
  }, []);
  
  const namePostHandler = (text) => {
    setNamePost(text);
  };
  const addLocationHandler = (text) => setAddLocation(text);

  const newPost = {
    photo: isImg,
    title: namePost,
    comments: "",
    like: "",
    city,
    coordinates: { ...location },
  };
  const submitHandler = () => {
    // if (isImg === "" || namePost === "" || addLocation == "") {
    //   return;
    // }
    console.log(`name post: ${namePost}`);
    console.log(`location: ${addLocation}`);
    console.log(`photo post: ${isImg}`);

    // keyboardHiden();
    navigation.navigate("DefaultScreenPost", newPost);

    setNamePost("");
    setAddLocation("");
    setIsImg("");
  };

  return (
    <>
      <View style={{ marginTop: 32, marginBottom: 16 }}>
        <InputForm
          onFocus={() => setIsShowKeyboard(true)}
          value={namePost}
          onChangeText={namePostHandler}
          placeholder="Назва..."
          inputPost
        />
        <InputForm
          onFocus={() => {
            setIsShowKeyboard(true);
          }}
          value={addLocation}
          onChangeText={addLocationHandler}
          placeholder="Місцевість"
          inputPost
          location
        >
          <View
            style={{
              paddingRight: 16,
            }}
          >
            <Icon
              name="location-outline"
              type="ionicon"
              color={city ? "green" : "#BDBDBD"}
              size={30}
              onPress={() => {
                setAddLocation(city);
              }}
            />
          </View>
        </InputForm>

        {!isShowKeyboard && (
          <Button
            title="Опублікувати"
            titleStyle={{
              color:
                isImg || namePost || addLocation ? COLORS.white : "#BDBDBD",
            }}
            buttonStyle={{
              width: "100%",
              height: 60,
              backgroundColor:
                isImg || namePost || addLocation ? COLORS.akcent : `#F6F6F6`,
              borderRadius: 100,
            }}
            onPress={submitHandler}
          />
        )}
      </View>

      {/* Button delete  */}
      {!isShowKeyboard && (
        <Button
          buttonStyle={{
            ...styles.btnDelete,
            marginTop: heightDisplay > 667 ? heightDisplay - 667 : 0,
            backgroundColor: "#F6F6F6",
          }}
          onPress={() => {
            setIsImg(false);
            setAddLocation("");
          }}
        >
          <AntDesign name="delete" size={24} color="#BDBDBD" />
        </Button>
      )}
    </>
  );
};

export default FormPost;
