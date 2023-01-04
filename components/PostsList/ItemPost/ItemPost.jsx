import React from "react";
import { View, Text, Image } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

import { IMGS, COLORS } from "../../../constants";

const ItemPost = ({ post, navigation }) => {
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
          source={{ uri: post.photo }}
          style={{ width: "100%", height: "100%" }}
        />
      </View>
      <Text style={{ color: COLORS.black, marginBottom: 8 }}>{post.title}</Text>
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
          <FontAwesome
            name={post.comments ? "comment" : "comment-o"}
            size={24}
            color={post.comments ? COLORS.akcent : "#BDBDBD"}
            onPress={() => {
              navigation.navigate("CommentsScreen");
            }}
          />
          <Text style={{ color: COLORS.black, marginLeft: 6 }}>
            {post.comments && post.comments}
          </Text>
          <AntDesign
            name={post.like ? "like1" : "like2"}
            size={24}
            color={post.like ? COLORS.akcent : "#BDBDBD"}
            style={{ marginLeft: 24 }}
          />
          <Text style={{ color: COLORS.black, marginLeft: 6 }}>
            {post.like && post.like}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <Ionicons
            name="location-outline"
            size={24}
            color="#BDBDBD"
            onPress={() => {
              navigation.navigate("MapScreen", post.coordinates);
            }}
          />
          <Text style={{ color: COLORS.black, marginLeft: 4 }}>
            {post.city}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ItemPost;
