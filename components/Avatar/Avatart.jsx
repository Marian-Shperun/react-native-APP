import React from "react";

import { View, Image } from "react-native";

import { Icon } from "@rneui/themed";

import { IMGS, COLORS } from "../../constants";
import { styles } from "./style";

const Avatart = ({ state }) => {
  const { stateAvatar, setStateAvatar } = state;
  return (
    <View style={styles.avatar}>
      <View style={styles.imgAvatar}>
        {stateAvatar && (
          <Image
            source={IMGS.userAva}
            style={{ width: "100%", height: "100%" }}
          />
        )}
        <View
          style={{
            ...styles.addAvatar,
            transform: [{ rotate: !stateAvatar ? "0deg" : "45deg" }],
            borderColor: !stateAvatar ? COLORS.akcent : COLORS.gray,
            backgroundColor: !stateAvatar ? "none" : COLORS.white,
          }}
          accessibilityRole="button"
        >
          <Icon
            name="add"
            type="ionicon"
            color={!stateAvatar ? COLORS.akcent : "#BDBDBD"}
            size={21}
            style={{ right: -0.8 }}
            onPress={() => {
              !stateAvatar
                ? setStateAvatar("The way to the picture")
                : setStateAvatar("");
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default Avatart;
