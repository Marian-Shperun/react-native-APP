import { useState, useEffect } from "react";
import { View, Text, Image, SafeAreaView, FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import ItemPost from "../../components/PostsList/ItemPost";

import { getAllPosts } from "../../redux/posts/postOperations";
import { styles } from "./style";

const DefaultScreenPost = ({ navigation }) => {
  const { items: posts } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  let userArray = [];

  useEffect(() => {
    dispatch(getAllPosts());
  }, []);

  const users = new Set();
  posts.map((post) => {
    users.add(post.user.userId);
  });

  for (const user of users) {
    let postUser = [];
    let dataUser = [];
    posts.filter((post) => {
      if (user === post.user.userId) {
        postUser.push({ ...post });
        dataUser.push(post.user);
      }
    });
    userArray.push({ user: dataUser[0], postUser: [...postUser] });
  }

  return (
    <View style={{ marginTop: 32 }}>
      <SafeAreaView>
        {posts.length > 0 ? (
          <FlatList
            data={userArray}
            keyExtractor={(item, indx) => indx.toString()}
            renderItem={({ item }) => {
              return (
                <>
                  <View style={styles.user}>
                    <Image
                      source={{ uri: item.user.photoProfile }}
                      style={styles.userFoto}
                    />
                    <View>
                      <Text style={styles.userName}> {item.user.nickName}</Text>
                      <Text style={styles.userEmail}>
                        {item.user.userEmail}
                      </Text>
                    </View>
                    <Text
                      style={{ position: "absolute", right: 16, bottom: 0 }}
                      onPress={() =>
                        navigation.navigate("UserAllPostScreen", {
                          userId: item.user.userId,
                        })
                      }
                    >
                      View all posts
                      {/* {new Date(item.date).toLocaleString()} */}
                    </Text>
                  </View>
                  <ItemPost post={item.postUser[0]} navigation={navigation} />
                  {item.postUser.map((post) => {
                    <ItemPost
                      post={item.postUser[0]}
                      navigation={navigation}
                    />;
                  })}
                </>
              );
            }}
          />
        ) : (
          <Text>Немає постів</Text>
        )}
      </SafeAreaView>
    </View>
  );
};

export default DefaultScreenPost;
