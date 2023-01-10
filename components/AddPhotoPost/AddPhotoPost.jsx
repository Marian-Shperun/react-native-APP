import { Camera, CameraType } from "expo-camera";

import { useState } from "react";
import { Button } from "@rneui/themed";
import { View, Text, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import * as DocumentPicker from "expo-document-picker";

import { styles } from "./style";

const AddPhotoPost = ({ stateImg }) => {
  const { isImg, setIsImg } = stateImg;
  const [photo, setPhoto] = useState("");
  const [camera, setCamera] = useState(null);
  const [isCameraReady, setIsCameraReady] = useState(false);

  // const [type, setType] = useState(CameraType.back);
  // const [permission, requestPermission] = Camera.useCameraPermissions();

  const takePhoto = async () => {
    const photo = await camera.takePictureAsync();

    setPhoto(photo.uri);
    setIsImg(photo.uri);
  };

  const onCameraReady = () => {
    setIsCameraReady(true);
  };

  const pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({
      type: "*/*",
      multiple: true,
      copyToCacheDirectory: true,
    });
    console.log(result.uri);
    console.log(result);
    setIsImg(result.uri);
  };

  const btnAddRemovePhoto = (e) => {
    const textBtn = e._targetInst.memoizedProps.children;
    if (textBtn === "Редагувати фото") {
      if (photo) {
        setPhoto("");
        setIsImg("");
      } else {
        console.log("Змінено  фото");
        pickDocument();
      }
    } else {
      console.log("Додано фото");
      pickDocument();
    }
  };

  return (
    <>
      <View style={styles.photoContainer}>
        {isImg && <Image source={{ uri: isImg }} style={styles.image} />}

        {photo && <Image source={{ uri: photo }} style={styles.image} />}

        <Camera
          style={styles.camera}
          ref={setCamera}
          onCameraReady={onCameraReady}
        >
          <Button buttonStyle={styles.cameraBtn} onPress={takePhoto}>
            <MaterialIcons name="add-a-photo" size={24} color="#BDBDBD" />
          </Button>
        </Camera>
      </View>

      {/* btnAddRemove */}
      <Text style={styles.btnAddRemove} onPress={btnAddRemovePhoto}>
        {isImg || photo ? "Редагувати фото" : "Завантажити фото"}
      </Text>
    </>
  );
};

export default AddPhotoPost;
