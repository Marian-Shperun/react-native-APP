import React from "react";

import { View, Image } from "react-native";

import { Icon } from "@rneui/themed";

import { styles } from "./style";

const img = "../../assets/ava.png";

const Avatart = ({ state }) => {
  const { stateAvatar, setStateAvatar } = state;
  return (
    <View style={styles.avatar}>
      <View style={styles.imgAvatar}>
        {stateAvatar && (
          <Image
            source={require("../../assets/ava.png")}
            style={{ width: "100%", height: "100%" }}
          />
        )}
        <View
          style={{
            ...styles.addAvatar,
            transform: [{ rotate: !stateAvatar ? "0deg" : "45deg" }],
            borderColor: !stateAvatar ? "#FF6C00" : "#E8E8E8",
            backgroundColor: !stateAvatar ? "none" : "#ffff",
          }}
          accessibilityRole="button"
        >
          <Icon
            name="add"
            type="ionicon"
            color={!stateAvatar ? "#FF6C00" : "#BDBDBD"}
            size={21}
            style={{ right: -0.8 }}
            onPress={() => {
              !stateAvatar ? setStateAvatar(img) : setStateAvatar("");
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default Avatart;
