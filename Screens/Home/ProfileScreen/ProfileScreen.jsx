import { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { useAuth } from "../../../hooks/ContextProvider";

import Container from "../../../components/Container";
import Avatar from "../../../components/Avatar";
import ItemPost from "../../../components/PostsList/ItemPost/ItemPost";

import { Ionicons } from "@expo/vector-icons";
import { styles } from "./style";

const ProfileScreen = () => {
  const { setIsAuth } = useAuth();

  const [stateAvatar, setStateAvatar] = useState("");
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
        <ScrollView style={{}}>
          <View style={{ marginHorizontal: 16, marginBottom: 43 }}>
            <ItemPost />
          </View>
        </ScrollView>
      </View>
    </Container>
  );
};

export default ProfileScreen;
