import { useState, useEffect } from "react";
import { Button } from "@rneui/themed";
import {
  View,
  Text,
  Platform,
  ImageBackground,
  Keyboard,
  Dimensions,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { IMGS, COLORS } from "../../../constants";
import { AntDesign } from "@expo/vector-icons";

// import InputForm from "../../../components/InputForm/";
import { styles } from "./style";
import { useKeyboardState } from "../../../hooks/ContextProvider";
import Container from "../../../components/Container";
import FormPost from "../../../components/Form/FormPost";

const CreatePostsScreen = () => {
  console.log(Platform.OS);
  const heightDisplay = Dimensions.get("window").height;

  const { isShowKeyboard, setIsShowKeyboard } = useKeyboardState();
  const [isImg, setIsImg] = useState("");
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
    <Container bgNone>
      <View
        style={{
          paddingTop: 32,
          paddingBottom: isShowKeyboard ? (Platform.OS === "ios" ? 40 : 0) : 0,
        }}
      >
        <View>
          <View
            style={{
              marginHorizontal: 16,
            }}
          >
            <View
              style={{
                width: "100%",
                height: 240,
                marginBottom: 8,
                backgroundColor: "#E8E8E8",
                borderRadius: 8,
                overflow: "hidden",
              }}
            >
              <ImageBackground
                source={isImg && IMGS.postImg}
                style={{
                  width: "100%",
                  height: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Button
                  buttonStyle={{
                    width: 60,
                    height: 60,
                    backgroundColor: `${COLORS.white}`,
                    borderRadius: 100,
                    zIndex: 5,
                  }}
                >
                  <MaterialIcons name="add-a-photo" size={24} color="#BDBDBD" />
                </Button>
              </ImageBackground>
            </View>
            <Text
              style={{
                fontFamily: "Roboto-Regulat",
                fontSize: 16,
                lineHeight: 19,
                color: "#BDBDBD",
              }}
              onPress={() => {
                if (isImg) {
                  console.log("Змінене фото");
                  setIsImg("Змінене фото");
                }
                setIsImg("Додане фото");
              }}
            >
              {isImg ? "Редагувати фото" : "Завантажити фото"}
            </Text>

            {/* Form Post */}
            <FormPost stateImg={{ isImg, setIsImg }} />
            {/* <View style={{ marginTop: 32, marginBottom: 16 }}>
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
            </View> */}
          </View>
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
            }}
          >
            <AntDesign name="delete" size={24} color="#BDBDBD" />
          </Button>
        )}
      </View>
    </Container>
  );
};
export default CreatePostsScreen;
