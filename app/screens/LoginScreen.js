import { StyleSheet, Text, Button } from "react-native";
import { StatusBar } from "expo-status-bar";
import Screen from "../components/Screen";
import useAuth from "../auth/useAuth";

const LoginScreen = (props) => {
  const { login } = useAuth();

  return (
    <Screen style={styles.container}>
      <StatusBar style="light" />

      <Text>Login Screen</Text>
      <Button title="Login" onPress={login} />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default LoginScreen;
