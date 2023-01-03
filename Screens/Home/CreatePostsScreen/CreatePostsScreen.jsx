import { useState } from "react";
import { View, Platform } from "react-native";

import { useKeyboardState } from "../../../hooks/ContextProvider";
import Container from "../../../components/Container";
import FormPost from "../../../components/Form/FormPost";
import AddPhotoPost from "../../../components/AddPhotoPost";

import { styles } from "./style";

const CreatePostsScreen = ({ navigation }) => {
  // console.log(Platform.OS);
  const { isShowKeyboard } = useKeyboardState();
  const [isImg, setIsImg] = useState("");
  const [city, setCity] = useState();

  const getLocation = (location) => setCity(location);

  return (
    <Container bgNone>
      <View
        style={{
          paddingTop: 32,
          paddingBottom: isShowKeyboard ? (Platform.OS === "ios" ? 40 : 0) : 0,
        }}
      >
        <View>
          <View style={{ marginHorizontal: 16 }}>
            {/* AddPhotoPost */}

            <AddPhotoPost
              stateImg={{ isImg, setIsImg }}
              getLocation={getLocation}
            />

            {/* Form Post */}
            <FormPost
              stateImg={{ isImg, setIsImg }}
              navigation={navigation}
              city={city}
            />
          </View>
        </View>
      </View>
    </Container>
  );
};
export default CreatePostsScreen;
