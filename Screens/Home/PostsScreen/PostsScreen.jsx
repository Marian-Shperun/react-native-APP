import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";

import { useDispatch } from "react-redux";
import { authSignOutUser } from "../../../redux/auth/authOperations";

import {
  MapScreen,
  DefaultScreenPost,
  CommentsScreen,
} from "../../nestedScreen";
const NestedScreen = createStackNavigator();

const PostsScreen = () => {
  const dispatch = useDispatch();
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
                dispatch(authSignOutUser());
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
