import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants";

export const styles = StyleSheet.create({
  img: {
    width: "100%",
    height: 240,
    marginBottom: 8,
    borderRadius: 8,
    overflow: "hidden",
  },
  title: {
    marginBottom: 8,
    fontFamily: "Roboto-Medium",
    fontSize: 16,
    lineHeight: 19,
    color: COLORS.black,
  },
  feedback: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  feedbackLinks: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  number: { color: COLORS.black, marginLeft: 6 },
  location: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  place: {
    marginLeft: 4,
    fontFamily: "Roboto-Regulat",
    fontSize: 16,
    lineHeight: 19,
    color: COLORS.black,
  },
});

export { COLORS };
