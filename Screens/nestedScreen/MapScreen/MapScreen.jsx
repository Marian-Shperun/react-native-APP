import MapView, { Marker } from "react-native-maps";
import { StyleSheet, View, Text } from "react-native";
import { useState, useEffect } from "react";

const MapScreen = ({ route }) => {
  const [location, setLocation] = useState("");

  useEffect(() => {
    if (route.params) {
      setLocation(route.params);
    }
  }, [route.params]);
  return (
    <View style={styles.container}>
      {typeof location === "object" ? (
        <MapView
          style={styles.map}
          initialRegion={{
            ...location,
            latitudeDelta: 0.006,
            longitudeDelta: 0.01,
          }}
        >
          <Marker coordinate={{ ...location }} title="travel photo" />
        </MapView>
      ) : (
        <Text style={{justifyContent: 'center'}}>{location}</Text>
      )}
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

export default MapScreen;
