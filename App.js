import "react-native-gesture-handler";
import { useState } from "react";
import AuthContext from "./app/auth/context";
import Navigation from "./app/navigation";
import { StatusBar } from "expo-status-bar";
import useLoading from "./app/hooks/useLoading";

const App = () => {
  const loading = useLoading();
  const [user, setUser] = useState();

  return loading ? (
    <StatusBar style="dark" />
  ) : (
    <AuthContext.Provider value={{ user, setUser }}>
      <StatusBar style="light" />
      <Navigation />
    </AuthContext.Provider>
  );
};

export default App;
