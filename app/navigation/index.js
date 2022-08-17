import { NavigationContainer } from "@react-navigation/native";
import useAuth from "../auth/useAuth";
import AppNavigation from "./AppNavigation";
import AuthNavigation from "./AuthNavigation";

const Navigation = (props) => {
  const { user } = useAuth();

  return (
    <NavigationContainer>
      {user ? <AppNavigation /> : <AuthNavigation />}
    </NavigationContainer>
  );
};

export default Navigation;
