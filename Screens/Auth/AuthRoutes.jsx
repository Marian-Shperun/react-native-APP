import { StatusBar } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const AuthStack = createNativeStackNavigator();

import Container from "../../components/Container";
import LoginScreen from "./LoginScreen";
import RegistrationScreen from "./RegistrationScreen";

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
      </AuthStack.Navigator>
    </>
  );
};
export default AuthRoutes;
