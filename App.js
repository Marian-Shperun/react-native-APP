import ContextProvider from "./hooks/ContextProvider";
import AppComponent from "./components/AppComponent";

export default function App() {
  return (
    <ContextProvider>
      <AppComponent />
    </ContextProvider>
  );
}
