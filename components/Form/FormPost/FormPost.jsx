import { useState, useEffect } from "react";
import { View, Platform, Keyboard, Dimensions } from "react-native";
import { useSelector } from "react-redux";
import { Button } from "@rneui/themed";
import { Icon } from "@rneui/themed";
import { AntDesign } from "@expo/vector-icons";

import { useKeyboardState } from "../../../hooks/ContextProvider";

import InputForm from "../../../components/Form/InputForm";

import { styles, COLORS } from "./style";

import db from "../../../firebase/config";

const FormPost = ({ stateImg, navigation, city, location }) => {
  // console.log(Platform.OS);
  const { userId, nickName, userEmail, photoProfile } = useSelector(
    (state) => state.auth
  );
  const heightDisplay = Dimensions.get("window").height;

  const { isImg, setIsImg } = stateImg;
  const { isShowKeyboard, setIsShowKeyboard } = useKeyboardState();
  const [namePost, setNamePost] = useState("");
  const [addLocation, setAddLocation] = useState("");
  const [coordinates, setCoordinates] = useState("");

  useEffect(() => {
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      setIsShowKeyboard(false);
    });

    return () => {
      hideSubscription.remove();
    };
  }, []);

  const namePostHandler = (text) => setNamePost(text);
  const addLocationHandler = (text) => setAddLocation(text);

  // !!!!!! add foto in storage
  const uploadPhotoToServer = async () => {
    const response = await fetch(isImg);
    const file = await response.blob();
    const uniquePostId = Date.now().toString();
    await db.storage().ref(`postImage/${uniquePostId}`).put(file);
    // console.log("data", data);

    const proccesedPhoto = await db
      .storage()
      .ref(`postImage`)
      .child(uniquePostId)
      .getDownloadURL();
    return proccesedPhoto;
  };

  // !!!!!! add post in firestore
  const uploadPostToServer = async () => {
    const photo = await uploadPhotoToServer();
    try {
      const newPost = {
        user: { userId, nickName, userEmail, photoProfile },
        photo,
        title: namePost,
        place: addLocation,
        coordinates: coordinates
          ? { ...coordinates }
          : "Місце не позначено на карті 🤷‍♂️",
        date: Date.now(),
      };
      const createPost = await db.firestore().collection("posts").add(newPost);
    } catch (e) {
      console.log(e);
      console.log(e.message);
    }
  };

  const submitHandler = () => {
    if (isImg === "" || namePost === "" || addLocation == "") {
      return;
    }

    uploadPostToServer();
    navigation.navigate("DefaultScreenPost");

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
                if (location) {
                  setCoordinates(location);
                }
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
