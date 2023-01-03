import { Camera, CameraType } from "expo-camera";

import * as Location from "expo-location";

import { useState } from "react";
import { Button } from "@rneui/themed";
import { View, Text, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { IMGS, COLORS } from "../../constants";

import { styles } from "./style";

const AddPhotoPost = ({ stateImg, getLocation }) => {
  const { isImg, setIsImg } = stateImg;
  const [photo, setPhoto] = useState("");
  const [camera, setCamera] = useState(null);
  const [isCameraReady, setIsCameraReady] = useState(false);

  // const [type, setType] = useState(CameraType.back);
  // const [permission, requestPermission] = Camera.useCameraPermissions();

  const takePhoto = async () => {
    const photo = await camera.takePictureAsync();
    const location = await Location.getCurrentPositionAsync();
    const place = await Location.reverseGeocodeAsync({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    });

    place.find((p) => {
      getLocation(p.city);
    });

    setPhoto(photo.uri);

    // console.log("camera---->", photo.uri);
  };

  const onCameraReady = () => {
    setIsCameraReady(true);
  };

  const btnAddRemovePhoto = (e) => {
    const textBtn = e._targetInst.memoizedProps.children;
    // console.log(textBtn);
    if (textBtn === "Редагувати фото") {
      if (photo) {
        setPhoto("");
        setIsImg("");
      } else {
        console.log("Змінено  фото");
        setIsImg("Фото змінено");
      }
    } else {
      console.log("Додано фото");
      setIsImg(IMGS.postImg);
    }
  };

  return (
    <>
      <View style={styles.photoContainer}>
        {isImg && (
          <Image
            source={{ uri: isImg }}
            style={{ width: "100%", height: "100%" }}
          />
        )}

        {photo && (
          <Image
            source={{ uri: photo }}
            style={{ width: "100%", height: "100%" }}
          />
        )}

        <Camera
          style={styles.camera}
          ref={setCamera}
          onCameraReady={onCameraReady}
        >
          <Button
            buttonStyle={{
              ...styles.cameraBtn,
              backgroundColor: `${COLORS.white}`,
            }}
            onPress={takePhoto}
          >
            <MaterialIcons name="add-a-photo" size={24} color="#BDBDBD" />
          </Button>
        </Camera>
      </View>

      {/* btnAddRemove */}
      <Text
        style={{
          fontFamily: "Roboto-Regulat",
          fontSize: 16,
          lineHeight: 19,
          color: "#BDBDBD",
        }}
        onPress={btnAddRemovePhoto}
      >
        {isImg || photo ? "Редагувати фото" : "Завантажити фото"}
      </Text>
    </>
  );
};

export default AddPhotoPost;
