import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";

export const styles = StyleSheet.create({
  avatar: { flex: 1, alignItems: "center" },
  imgAvatar: {
    position: "absolute",
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
    width: 25,
    height: 25,
    borderWidth: 1,
    borderRadius: 50,
  },
});

export { COLORS };
