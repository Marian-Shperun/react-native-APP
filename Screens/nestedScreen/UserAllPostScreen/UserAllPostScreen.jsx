import { useState } from "react";
import { SafeAreaView, FlatList } from "react-native";
import { useSelector } from "react-redux";
import ItemPost from "../../../components/PostsList/ItemPost";

const UserAllPostScreen = ({ route, navigation }) => {
  const { items } = useSelector((state) => state.posts);
  const { userId } = route.params;
  [postsUsers, setPostsUsers] = useState(
    items.filter((item) => item.user.userId === userId && { ...item })
  );
  return (
    <SafeAreaView style={{ marginTop: 32 }}>
      <FlatList
        data={postsUsers}
        keyExtractor={(item, indx) => indx.toString()}
        renderItem={({ item }) => (
          <ItemPost post={item} navigation={navigation} />
        )}
      />
    </SafeAreaView>
  );
};

export default UserAllPostScreen;
