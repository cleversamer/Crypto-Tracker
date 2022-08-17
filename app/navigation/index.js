import { NavigationContainer } from "@react-navigation/native";
import AppNavigation from "./AppNavigation";

const Navigation = (props) => {
  return (
    <NavigationContainer>
      <AppNavigation />
    </NavigationContainer>
  );
};

export default Navigation;
