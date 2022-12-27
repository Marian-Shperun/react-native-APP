import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  form: {
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  avatar: { flex: 1, alignItems: "center" },
  imgAvatar: {
    position: "absolute",
    top: 0,
    width: 120,
    height: 120,
    transform: [{ translateY: -60 }],
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
  },
  addAvatar: {
    position: "absolute",
    bottom: 14,
    right: -12.5,
  },
  formTitle: {
    marginTop: 92,
    marginBottom: 32,
    fontFamily: "Roboto",
    fontWeight: 500,
    fontWeight: "bold",
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    color: "#212121",
  },
  text: { textAlign: "center", marginTop: 16 },
});
