import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants";

export const styles = StyleSheet.create({
  inputWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 50,
    marginBottom: 16,
  },
  inputWrapperAuth: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 8,
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
  },
  inputWrapperPost: {
    borderBottomWidth: 1,
    borderColor: "black",
    borderColor: "#E8E8E8",
  },

  input: {
    width: "89%",
    padding: 16,
    fontFamily: "Roboto-Regulat",
    fontSize: 16,
    lineHeight: 19,
  },
});
export { COLORS };
