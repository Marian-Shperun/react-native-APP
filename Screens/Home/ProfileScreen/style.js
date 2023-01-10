import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants";

export const styles = StyleSheet.create({
  profile: {
    // width: "100%",
    maxHeight: "78%",
    marginTop: "auto",
    paddingTop: 92,
    paddingBottom: 40,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  profileName: {
    color: COLORS.black,
    textAlign: "center",
    marginBottom: 32,
  },
});
