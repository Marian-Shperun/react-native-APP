import React from "react";

import { View, Image } from "react-native";

import { Icon } from "@rneui/themed";

import { IMGS, COLORS } from "../../constants";
import { styles } from "./style";

const Avatart = ({ state, profile, photoProfile }) => {
  const { avatar, setStateAvatar } = state;
  return (
    <View style={styles.avatar}>
      <View
        style={{
          ...styles.imgAvatar,
          top: profile ? -92 : 0,
        }}
      >
        {avatar && (
          <Image
            source={{ uri: avatar }}
            style={{ width: "100%", height: "100%", borderRadius: 16 }}
          />
        )}
        <View
          style={{
            ...styles.addAvatar,
            transform: [{ rotate: !avatar ? "0deg" : "45deg" }],
            borderColor: !avatar ? COLORS.akcent : COLORS.gray,
            backgroundColor: !avatar ? "none" : COLORS.white,
          }}
          accessibilityRole="button"
        >
          <Icon
            name="add"
            type="ionicon"
            color={!avatar ? COLORS.akcent : "#BDBDBD"}
            size={21}
            style={{ right: -0.8 }}
            onPress={() => {
              !avatar ? setStateAvatar(IMGS.postImg) : setStateAvatar("");
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default Avatart;
