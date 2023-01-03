import MapView, { Marker } from "react-native-maps";
import { StyleSheet, View, Text } from "react-native";

const CommentsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>CommentsScreen</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});

export default CommentsScreen;
