import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import CoinDetailsScreen from "../screens/CoinDetailsScreen";
import routes from "./routes";

const globalScreenOptions = {
  headerShown: false,
};

const Stack = createNativeStackNavigator();

const AppNavigation = () => (
  <Stack.Navigator screenOptions={globalScreenOptions}>
    <Stack.Screen name={routes.HOME} component={HomeScreen} />
    <Stack.Screen name={routes.COIN_DETAILS} component={CoinDetailsScreen} />
  </Stack.Navigator>
);

export default AppNavigation;
