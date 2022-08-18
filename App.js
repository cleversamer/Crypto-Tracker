import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "./app/navigation";
import useLoading from "./app/hooks/useLoading";

const App = () => {
  const loading = useLoading();

  return loading ? null : (
    <SafeAreaProvider>
      <StatusBar style="light" />
      <Navigation />
    </SafeAreaProvider>
  );
};

export default App;
