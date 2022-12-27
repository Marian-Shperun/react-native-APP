import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
  form: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  formInner: {
    marginHorizontal: 16,
  },

  formTitle: {
    marginTop: 32,
    marginBottom: 32,
    fontFamily: "Roboto",
    fontWeight: "medium",
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    letterPacing: 0.01,
    color: "#212121",
  },
  text: {
    textAlign: "center",
    marginTop: 16,
  },
});
