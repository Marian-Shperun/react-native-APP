import { StatusBar } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const MainTab = createBottomTabNavigator();

import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import CreatePostsScreen from "./CreatePostsScreen";
import PostsScreen from "./PostsScreen";
import ProfileScreen from "./ProfileScreen";

import { styles } from "./style";

const Home = () => {
  return (
    <>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
      <MainTab.Navigator
        screenOptions={({ route }) => ({
          headerTitleAlign: "center",
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#FFFFFF",
          tabBarHideOnKeyboard: true,
          tabBarStyle: {
            height: 83,
            display: route.name === "Create Posts" ? "none" : "flex",
            justifyContent: "center",
          },
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Posts Screen") {
              iconName = "appstore-o";
            } else if (route.name === "Create Posts") {
              iconName = "plus";
            } else if (route.name === "Profile") {
              iconName = "user";
            }
            return (
              <AntDesign
                name={iconName}
                size={size}
                color={color}
                style={focused ? styles.activeTab : null}
              />
            );
          },
        })}
      >
        <MainTab.Screen
          name="Posts Screen"
          component={PostsScreen}
          options={{
            headerShown: false,
          }}
        />

        <MainTab.Screen
          name="Create Posts"
          component={CreatePostsScreen}
          options={({ navigation }) => ({
            headerLeft: () => (
              <Ionicons
                style={{ marginLeft: 10 }}
                name="arrow-back-sharp"
                size={24}
                color="black"
                onPress={() => {
                  return navigation.navigate("Posts Screen");
                }}
              />
            ),
          })}
        />

        <MainTab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            headerShown: false,
          }}
        />
      </MainTab.Navigator>
    </>
  );
};

export default Home;
