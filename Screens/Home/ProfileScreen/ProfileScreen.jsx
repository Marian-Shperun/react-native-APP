import { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { authSignOutUser } from "../../../redux/auth/authOperations";

import Container from "../../../components/Container";
import Avatar from "../../../components/Avatar";
import PostsList from "../../../components/PostsList/PostsList";

import { Ionicons } from "@expo/vector-icons";
import { styles } from "./style";

const ProfileScreen = () => {
  const { userId, nickName, userEmail, photoProfile } = useSelector(
    (state) => state.auth
  );
  const [stateAvatar, setStateAvatar] = useState("");
  const dispatch = useDispatch();

  return (
    <Container>
      <View style={styles.profile}>
        <Avatar
          state={{ stateAvatar, setStateAvatar }}
          profile
          // photoProfile={photoProfile}
        />
        <Ionicons
          style={{ position: "absolute", top: 22, right: 16 }}
          name="md-exit-outline"
          size={25}
          color="#BDBDBD"
          onPress={() => dispatch(authSignOutUser())}
        />
        <Text style={styles.profileName}>{nickName}</Text>
        <Text style={styles.profileName}></Text>
        <ScrollView style={{}}>
          {/* <PostsList posts={posts} navigation={navigation} /> */}
        </ScrollView>
      </View>
    </Container>
  );
};

export default ProfileScreen;
