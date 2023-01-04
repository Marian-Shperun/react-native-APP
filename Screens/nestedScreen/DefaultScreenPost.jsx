import { useState, useEffect } from "react";
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
} from "react-native";
import { useSelector } from "react-redux";
import PostsList from "../../components/PostsList/PostsList";

import { IMGS } from "../../constants";

const DefaultScreenPost = ({ route, navigation }) => {
  const [posts, setPosts] = useState([]);
  const { nickName, userEmail, photoProfile } = useSelector(
    (state) => state.auth
  );
  useEffect(() => {
    if (route.params) setPosts((prevState) => [...prevState, route.params]);
  }, [route.params]);

  return (
    <SafeAreaView>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginHorizontal: 16,
          marginTop: 32,
          marginBottom: 32,
        }}
      >
        <Image source={{ uri: photoProfile }} style={styles.userFoto} />
        <View>
          <Text style={styles.userName}> {nickName}</Text>
          <Text style={styles.userEmail}> {userEmail}</Text>
        </View>
      </View>
      <PostsList posts={posts} navigation={navigation} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  userFoto: { width: 60, height: 60, marginRight: 8, borderRadius: 16 },
  userName: {
    fontFamily: "Roboto-Bold",
    fontSize: 13,
    lineHeight: 15,
    color: "#212121",
  },
  userEmail: {
    fontFamily: "Roboto-Regulat",
    fontSize: 11,
    lineHeight: 13,
    color: "#212121",
    opacity: 0.8,
  },
});

export default DefaultScreenPost;
