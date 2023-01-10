import { View, Text, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

import { styles, COLORS } from "./style";

const ItemPost = ({ post, navigation }) => {
  return (
    <View style={{ marginBottom: 32, marginHorizontal: 16 }}>
      <View style={styles.img}>
        <Image
          source={{ uri: post.photo }}
          style={{ width: "100%", height: "100%" }}
        />
      </View>

      <Text style={styles.title}>{post.title}</Text>

      <View style={styles.feedback}>
        <View style={styles.feedbackLinks}>
          <FontAwesome
            name={post.comments ? "comment" : "comment-o"}
            size={24}
            color={post.comments ? COLORS.akcent : "#BDBDBD"}
            onPress={() => {
              navigation.navigate("CommentsScreen", {
                postId: post.id,
                postPhoto: post.photo,
              });
            }}
          />
          <Text style={styles.number}>{post.comments && post.comments}</Text>
          <AntDesign
            name={post.like ? "like1" : "like2"}
            size={24}
            color={post.like ? COLORS.akcent : "#BDBDBD"}
            style={{ marginLeft: 24 }}
          />
          <Text style={styles.number}>{post.like && post.like}</Text>
        </View>

        <View style={styles.location}>
          <Ionicons
            name="location-outline"
            size={24}
            color="#BDBDBD"
            onPress={() => {
              navigation.navigate("MapScreen", post.coordinates);
            }}
          />
          <Text style={styles.place}>{post.place}</Text>
        </View>
      </View>
    </View>
  );
};

export default ItemPost;
