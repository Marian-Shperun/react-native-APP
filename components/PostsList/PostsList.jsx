import React, { useState, useEffect } from "react";
import { Text, View, FlatList } from "react-native";
import ItemPost from "./ItemPost/ItemPost";
import { IMGS } from "../../constants";

const PostsList = ({ posts, navigation }) => {
  console.log(posts)
  return (
    <View style={{ marginHorizontal: 16, marginBottom: 0 }}>
      {posts.length > 0 ? (
        <FlatList
          data={posts}
          keyExtractor={(item, indx) => indx.toString()}
          renderItem={({ item }) => (
            <ItemPost post={item} navigation={navigation} />
          )}
        />
      ) : (
        <Text>Немає постів</Text>
      )}
    </View>
  );
};

export default PostsList;