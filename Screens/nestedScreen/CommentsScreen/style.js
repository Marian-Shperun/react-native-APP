import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 16,
    paddingRight: 16,
  },
  content: {
    height: "100%",
  },

  photo: {
    width: "100%",
    height: 240,
    marginBottom: 32,
    backgroundColor: "#E8E8E8",
    borderRadius: 8,
    overflow: "hidden",
  },
  commentBlock: {
    justifyContent: "space-between",
    marginBottom: 24,
  },
  photoUser: {
    width: 28,
    height: 28,
    borderRadius: 50,
    borderWidth: 1,
    marginRigth: 16,
  },
  commentText: {
    width: "87%",
    flexDirection: "column",
    padding: 16,
    backgroundColor: "#E8E8E8",
    borderRadius: 8,
  },
  commentDate: {
    marginTop: 8,
    fontFamily: "Roboto-Regulat",
    fontSize: 10,
    lineHeight: 12,

    color: "#BDBDBD",
  },
  inputContainer: {
    height: 50,
    marginBottom: 16,
    padding: 16,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
  },
  input: {
    marginRight: 50,
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 19,
  },
  btnSubmit: {
    position: "absolute",
    top: 8,
    right: 8,
    bottom: 12,
    width: 34,
    height: 34,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.akcent,
    borderRadius: 100,
  },
});

export { COLORS };
