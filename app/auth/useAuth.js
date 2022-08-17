import { useContext } from "react";
import AuthContext from "./context";

const useAuth = () => {
  const { user, setUser } = useContext(AuthContext);

  const login = () => {
    try {
      // Logic for decoding token, getting user object,
      // and store it in SecureStore.
      // Or calling one of firebase authentication methods.
      setUser(true);
    } catch (err) {
      throw err;
    }
  };

  const logout = () => {
    try {
      setUser(false);
    } catch (err) {
      throw err;
    }
  };

  return { user, login, logout };
};

export default useAuth;
