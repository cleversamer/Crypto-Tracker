import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import routes from "./routes";

const globalScreenOptions = {
  headerStyle: { backgroundColor: "#2c6bed" },
  headerTitleStyle: { color: "#fff" },
  headerTintColor: "#fff",
};

const Stack = createNativeStackNavigator();

const AuthNavigation = () => (
  <Stack.Navigator screenOptions={globalScreenOptions}>
    <Stack.Screen name={routes.LOGIN} component={LoginScreen} />
  </Stack.Navigator>
);

export default AuthNavigation;
