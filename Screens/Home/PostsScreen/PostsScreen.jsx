import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { authSignOutUser } from "../../../redux/auth/authOperations";

import {
  MapScreen,
  DefaultScreenPost,
  CommentsScreen,
  UserAllPostScreen,
} from "../../nestedScreen";
const NestedScreen = createStackNavigator();
import { CommonActions } from "@react-navigation/native";

const PostsScreen = () => {
  const dispatch = useDispatch();

  return (
    <NestedScreen.Navigator
      screenOptions={() => ({
        headerTitleAlign: "center",
      })}
      screenListeners={({ route, navigation }) => ({
        state: (e) => {
          if (route.name === "CommentsScreen") {
            navigation.dispatch(
              CommonActions.navigate({
                name: "Posts Screen",
                params: { display: "none" },
              })
            );
          } else {
            navigation.dispatch(
              CommonActions.navigate({
                name: "Posts Screen",
                params: { display: "flex" },
              })
            );
          }
        },
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
          title: "Публікації",
        }}
      />

      <NestedScreen.Screen
        name="CommentsScreen"
        component={CommentsScreen}
        options={{ title: "Коментарії" }}
      />
      <NestedScreen.Screen
        name="UserAllPostScreen"
        component={UserAllPostScreen}
        options={{ title: "Пости" }}
      />
      <NestedScreen.Screen
        name="MapScreen"
        component={MapScreen}
        options={{ title: "Карта" }}
      />
    </NestedScreen.Navigator>
  );
};

export default PostsScreen;
