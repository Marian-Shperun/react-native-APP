import { useState, useEffect } from "react";
import { View, Platform, Text } from "react-native";
import * as Location from "expo-location";

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
  const [location, setLocation] = useState();
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
      const location = await Location.getCurrentPositionAsync();
      const place = await Location.reverseGeocodeAsync({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
      
      place.find((p) => {
        setCity(p.city);
      });
      setLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
    })();
  }, []);

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

            <AddPhotoPost stateImg={{ isImg, setIsImg }} />

            {/* Form Post */}

            <FormPost
              stateImg={{ isImg, setIsImg }}
              navigation={navigation}
              city={city}
              location={location}
            />
          </View>
        </View>
      </View>
    </Container>
  );
};
export default CreatePostsScreen;
