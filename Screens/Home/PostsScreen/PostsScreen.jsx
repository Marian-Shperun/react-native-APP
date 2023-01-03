import {
  MapScreen,
  DefaultScreenPost,
  CommentsScreen,
} from "../../nestedScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";
import { useAuth } from "../../../hooks/ContextProvider";

const NestedScreen = createStackNavigator();

const PostsScreen = () => {
  const { setIsAuth } = useAuth();

  return (
    <NestedScreen.Navigator
      screenOptions={({ navigation, route }) => ({
        headerTitleAlign: "center",
      })}
    >
      <NestedScreen.Screen
        name="DefaultScreenPost"
        component={DefaultScreenPost}
        options={{
          headerRight: () => (
            <Ionicons
              style={{ marginRight: 10 }}
              onPress={() => {
                console.log("click");
                return setIsAuth(false);
              }}
              name="md-exit-outline"
              size={28}
              color="#BDBDBD"
            />
          ),
        }}
      />
      <NestedScreen.Screen name="MapScreen" component={MapScreen} />
      <NestedScreen.Screen name="CommentsScreen" component={CommentsScreen} />
    </NestedScreen.Navigator>
  );
};

export default PostsScreen;
