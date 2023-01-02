import { StatusBar } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const AuthStack = createNativeStackNavigator();

import Container from "../../components/Container";
import LoginScreen from "./LoginScreen";
import RegistrationScreen from "./RegistrationScreen";

// import Home from "../Home";
// import { useAuth } from "../../hooks/ContextProvider";
// import { getHeaderTitle } from "../../hooks/useGetTitle";
// import { Ionicons } from "@expo/vector-icons";

const AuthRoutes = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <AuthStack.Navigator>
        <AuthStack.Screen options={{ headerShown: false }} name="Login">
          {(props) => (
            <Container>
              <LoginScreen navigation={props.navigation} />
            </Container>
          )}
        </AuthStack.Screen>

        <AuthStack.Screen options={{ headerShown: false }} name="Register">
          {(props) => (
            <Container>
              <RegistrationScreen navigation={props.navigation} />
            </Container>
          )}
        </AuthStack.Screen>

        {/* <AuthStack.Screen
          name="Home"
          component={Home}
          screenOptions={{}}
          options={({ navigation, route }) => ({
            headerShown: getHeaderTitle(route) === "Мій Профіль" ? false : true,
            headerBackVisible: false,
            headerTitleAlign: "center",
            headerTitle: getHeaderTitle(route),
            headerRight: () => (
              <Ionicons
                onPress={() => {
                  console.log("click");
                  return setIsAuth(false);
                }}
                name="md-exit-outline"
                size={28}
                color="#BDBDBD"
              />
            ),
            headerLeft: () => (
              <>
                {getHeaderTitle(route) === "Створити публікацію" && (
                  <Ionicons
                    name="arrow-back-sharp"
                    size={24}
                    color="black"
                    onPress={() => {
                      console.log(navigation.getState());
                    }}
                  />
                )}
              </>
            ),
          })}
        /> */}
      </AuthStack.Navigator>
    </>
  );
};
export default AuthRoutes;
