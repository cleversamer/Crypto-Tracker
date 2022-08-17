import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import routes from "./routes";

const globalScreenOptions = {
  headerStyle: { backgroundColor: "#2c6bed" },
  headerTitleStyle: { color: "#fff" },
  headerTintColor: "#fff",
};

const Stack = createNativeStackNavigator();

const AppNavigation = () => (
  <Stack.Navigator screenOptions={globalScreenOptions}>
    <Stack.Screen name={routes.HOME} component={HomeScreen} />
  </Stack.Navigator>
);

export default AppNavigation;
