import { StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import NavigationContext from "../navigation/context";
import Screen from "../components/Screen";
import Header from "../components/coinDetails/Header";
import PriceTags from "../components/coinDetails/PriceTags";
import withStatusBarPadding from "../hoc/withStatusBarPadding";
import colors from "../config/colors";

const CoinDetailsScreen = ({ navigation, route }) => {
  const coin = route.params;

  return (
    <NavigationContext.Provider value={navigation}>
      <Screen style={styles.container}>
        <StatusBar style="light" />

        <Header coin={coin} />
        <PriceTags coin={coin} />
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
