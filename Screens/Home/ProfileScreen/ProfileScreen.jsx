import { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import db from "../../../firebase/config";

import { authSignOutUser } from "../../../redux/auth/authOperations";

import Avatar from "../../../components/Avatar";
import PostsList from "../../../components/PostsList/PostsList";

import { Ionicons } from "@expo/vector-icons";
import { styles } from "./style";

const ProfileScreen = ({ navigation }) => {
  const { userId, nickName, photoProfile } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [posts, setPosts] = useState([]);

  const getAllPosts = async () => {
    await db
      .firestore()
      .collection("posts")
      .onSnapshot((data) => {
        data.docs.filter((doc) => {
          const userPost = doc.data().user.userId;
          if (userPost === userId) {
            const post = { ...doc.data(), id: doc.id };
            setPosts((prevState) => [...prevState, post]);
          }
        });
      });
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <View style={styles.profile}>
      <Avatar photoProfile={photoProfile} profile />
      <Ionicons
        style={{ position: "absolute", top: 22, right: 16 }}
        name="md-exit-outline"
        size={25}
        color="#BDBDBD"
        onPress={() => dispatch(authSignOutUser())}
      />

      <Text style={styles.profileName}>{nickName}</Text>

      <PostsList posts={posts} navigation={navigation} />
    </View>
  );
};

export default ProfileScreen;
