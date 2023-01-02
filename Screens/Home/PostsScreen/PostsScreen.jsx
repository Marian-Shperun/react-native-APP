import { View, Text, ScrollView, Image } from "react-native";
import { IMGS } from "../../../constants";
import { styles } from './style'

const PostsScreen = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        marginTop: 32,
        marginHorizontal: 16,
      }}
    >
      <Image
        source={IMGS.userAva}
        style={styles.userFoto}
      />
      <View>
        <Text style={styles.userName}> User Name</Text>
        <Text style={styles.userEmail}> Email</Text>
      </View>
    </View>
  );
};

export default PostsScreen;
