import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { NavigationContainer } from "@react-navigation/native";

import Auth from "../Screens/Auth";
import Home from "../Screens/Home";

import { authStateCahngeUser } from "../redux/auth/authOperations";

export default function AppComponent() {
  const { stateChange } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authStateCahngeUser());
  }, []);

  return (
    <NavigationContainer>
      {!stateChange ? <Auth /> : <Home />}
    </NavigationContainer>
  );
}
