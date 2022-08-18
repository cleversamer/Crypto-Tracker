import { StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import NavigationContext from "../navigation/context";
import Screen from "../components/Screen";
import CoinDetailsHeader from "../components/coinDetails/Header";
import withStatusBarPadding from "../hoc/withStatusBarPadding";

import crypto from "../static/crypto.json";
import colors from "../config/colors";

const CoinDetailsScreen = ({ navigation, route }) => {
  const coin = route.params;

  return (
    <NavigationContext.Provider value={navigation}>
      <Screen style={styles.container}>
        <StatusBar style="light" />

        <CoinDetailsHeader coin={coin} />
      </Screen>
    </NavigationContext.Provider>
  );
};

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: colors.lightBlack,
  },
  container: {
    backgroundColor: colors.lightBlack,
    paddingHorizontal: 10,
    paddingTop: 5,
  },
});

export default withStatusBarPadding(CoinDetailsScreen, styles.statusBar);
