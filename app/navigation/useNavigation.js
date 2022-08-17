import { useContext } from "react";
import NavigationContext from "./context";

const useNavigation = () => {
  const navigation = useContext(NavigationContext);

  return navigation;
};

export default useNavigation;
