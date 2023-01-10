import { Provider } from "react-redux";
import { store } from "./redux/store";
import ContextProvider from "./hooks/ContextProvider";
import AppComponent from "./components/AppComponent";
import "@env";

export default function App() {
  return (
    <Provider store={store}>
      <ContextProvider>
        <AppComponent />
      </ContextProvider>
    </Provider>
  );
}
