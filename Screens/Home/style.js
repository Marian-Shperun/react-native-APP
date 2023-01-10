import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";

export const styles = StyleSheet.create({
  activeTab: {
    backgroundColor: COLORS.akcent,
    paddingTop: 13.5,
    paddingBottom: 13.5,
    paddingLeft: 28.5,
    paddingRight: 28.5,
    borderRadius: 27,
    overflow: "hidden",
  },
});
