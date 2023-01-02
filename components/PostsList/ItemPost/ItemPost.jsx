import React from "react";
import { View, Text, Image } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

import { IMGS, COLORS } from "../../../constants";

const ItemPost = () => {
  return (
    <View style={{ marginBottom: 32 }}>
      <View
        style={{
          width: "100%",
          height: 240,
          marginBottom: 8,
          borderRadius: 8,
          overflow: "hidden",
        }}
      >
        <Image
          source={IMGS.postImg}
          style={{ width: "100%", height: "100%" }}
        />
      </View>
      <Text style={{ color: COLORS.black, marginBottom: 8 }}>Name Post</Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <FontAwesome name="comment" size={24} color={COLORS.akcent} />
          <Text style={{ color: COLORS.black, marginLeft: 6 }}>5</Text>
          <AntDesign
            name="like2"
            size={24}
            color={COLORS.akcent}
            style={{ marginLeft: 24 }}
          />
          <Text style={{ color: COLORS.black, marginLeft: 6 }}>15</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <Ionicons name="location-outline" size={24} color="#" />
          <Text style={{ color: COLORS.black, marginLeft: 4 }}>Location</Text>
        </View>
      </View>
    </View>
  );
};

export default ItemPost;
