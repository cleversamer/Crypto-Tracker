import { StyleSheet, Text, Button } from "react-native";
import { StatusBar } from "expo-status-bar";
import Screen from "../components/Screen";
import useAuth from "../auth/useAuth";

const HomeScreen = (props) => {
  const { logout } = useAuth();

  return (
    <Screen style={styles.container}>
      <StatusBar style="light" />

      <Text>Home Screen</Text>
      <Button title="Logout" onPress={logout} />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;
