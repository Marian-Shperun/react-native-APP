import { useState, useEffect } from "react";
import { View, Text, ScrollView } from "react-native";
import { useAuth } from "../../../hooks/ContextProvider";

import Container from "../../../components/Container";
import Avatar from "../../../components/Avatar";
import PostsList from "../../../components/PostsList/PostsList";

import { Ionicons } from "@expo/vector-icons";
import { styles } from "./style";

import {
  NavigationContainer,
  useRoute,
  useNavigationState,
} from "@react-navigation/native";

const ProfileScreen = ({ navigation }) => {
  const { setIsAuth } = useAuth();
  const [stateAvatar, setStateAvatar] = useState("");

  // const posts = useNavigationState((state) => state.history) || [];
  // console.log(posts);

  const onChangeVatart = () => {
    setIsAuth(false);
  };

  return (
    <Container>
      <View style={styles.profile}>
        <Avatar state={{ stateAvatar, setStateAvatar }} profile />
        <Ionicons
          style={{ position: "absolute", top: 22, right: 16 }}
          name="md-exit-outline"
          size={25}
          color="#BDBDBD"
          onPress={onChangeVatart}
        />
        <Text style={styles.profileName}>Name User</Text>
        <Text style={styles.profileName}></Text>
        <ScrollView style={{}}>
          {/* <PostsList posts={posts} navigation={navigation} /> */}
        </ScrollView>
      </View>
    </Container>
  );
};

export default ProfileScreen;
