import { NavigationContainer } from "@react-navigation/native";

import { useAuth } from "../hooks/ContextProvider";
import Auth from "../Screens/Auth";
import Home from "../Screens/Home";

export default function AppComponent() {
  const { isAuth } = useAuth();

  return (
    <NavigationContainer>{!isAuth ? <Auth /> : <Home />}</NavigationContainer>
  );
}
