import { StyleSheet } from "react-native";

export const formAuthStyles = StyleSheet.create({
  form: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  formInner: {
    marginHorizontal: 16,
  },
  formTitle: {
    marginBottom: 32,

    fontFamily: "Roboto-Medium",
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    letterPacing: 0.01,
    color: "#212121",
  },
  formTextInfo: {
    textAlign: "center",
    fontFamily: "Roboto-Regulat",
    fontSize: 16,
    lineHeight: 19,
  },
});
