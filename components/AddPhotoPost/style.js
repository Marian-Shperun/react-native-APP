import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";

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
    width: 150,
    height: 150,
    borderWidth: 1,
    borderColor: "red",
  },
  image: { width: "100%", height: "100%" },

  cameraBtn: {
    width: 60,
    height: 60,
    borderRadius: 100,
    backgroundColor: `${COLORS.white}`,
    zIndex: 5,
  },
  btnAddRemove: {
    fontFamily: "Roboto-Regulat",
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",
  },
});
