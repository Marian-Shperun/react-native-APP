import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  camera: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  photoContainer: {
    width: "100%",
    height: 240,
    marginBottom: 8,
    backgroundColor: "#E8E8E8",
    borderRadius: 8,
    overflow: "hidden",
  },
  takePhotoContainer: {
    // position: "absolute",
    // top: 0,
    // left: 0,
    width: 150,
    height: 150,
    borderWidth: 1,
    borderColor: "red",
  },
  cameraBtn: {
    width: 60,
    height: 60,
    borderRadius: 100,
    zIndex: 5,
  },
  btnDelete: {
    marginTop: 50,
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 34,
    borderRadius: 20,
    paddingTop: 8,
    paddingLeft: 23,
    paddingRight: 23,
    paddingBottom: 8,
  },
});
