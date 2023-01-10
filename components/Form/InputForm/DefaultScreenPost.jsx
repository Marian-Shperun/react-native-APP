import { useState, useEffect } from "react";
import { View, Text, Image, SafeAreaView, FlatList } from "react-native";

import ItemPost from "../../components/PostsList/ItemPost";

import db from "../../firebase/config";

import { styles } from "./style";

const DefaultScreenPost = ({ navigation }) => {
  const [posts, setPosts] = useState([]);
  const users = posts.map((post) => console.log(post.user.userId));
  const getAllPosts = async () => {
    await db
      .firestore()
      .collection("posts")
      .onSnapshot((data) => {
        setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      });
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <View style={{ marginTop: 32 }}>
      <SafeAreaView>
        {posts.length > 0 ? (
          <FlatList
            data={posts}
            keyExtractor={(item, indx) => item.id.toString()}
            renderItem={({ item }) => (
              <>
                <View style={styles.user}>
                  <Image
                    source={{ uri: item.user.photoProfile }}
                    style={styles.userFoto}
                  />
                  <View>
                    <Text style={styles.userName}> {item.user.nickName}</Text>
                    <Text style={styles.userEmail}> {item.user.userEmail}</Text>
                  </View>
                  <Text style={{ position: "absolute", right: 16, bottom: 0 }}>
                    {new Date(item.date).toLocaleString()}
                  </Text>
                </View>
                <ItemPost post={item} navigation={navigation} />
              </>
            )}
          />
        ) : (
          <Text>Немає постів</Text>
        )}
      </SafeAreaView>
    </View>
  );
};

export default DefaultScreenPost;
