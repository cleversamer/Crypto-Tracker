import { StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Text } from "@rneui/themed";
import Screen from "../components/Screen";
import withStatusBarPadding from "../hoc/withStatusBarPadding";
import colors from "../config/colors";

const HomeScreen = (props) => {
  return (
    <Screen style={styles.container}>
      <StatusBar style="light" />
      <Text style={{ color: "#fff" }}>Home Screen</Text>
    </Screen>
  );
};

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: colors.black,
  },
  container: {
    alignItems: "center",
    backgroundColor: colors.black,
    flex: 1,
    justifyContent: "center",
  },
});

export default withStatusBarPadding(HomeScreen, styles.statusBar);
