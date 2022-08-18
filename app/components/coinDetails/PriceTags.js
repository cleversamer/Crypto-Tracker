import { Text } from "@rneui/themed";
import { View, StyleSheet } from "react-native";
import mapper from "../../services/mapper";
import colors from "../../config/colors";
import PriceChange from "../PriceChange";

const PriceTags = ({ coin }) => {
  const current_price = mapper.separateByComma(
    coin.market_data.current_price.usd
  );

  return (
    <View style={styles.container}>
      <View>
        <Text style={[styles.text, styles.name]}>{coin.name}</Text>
        <Text style={[styles.text, styles.currentPrice]}>${current_price}</Text>
      </View>

      <PriceChange
        containerOptions={{ style: styles.priceChangeContainer }}
        iconOptions={{ size: 18 }}
        price={coin.market_data.price_change_percentage_24h}
        textOptions={{ style: styles.priceChangePercentage }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 15,
  },
  priceChangeContainer: {
    alignSelf: "flex-end",
  },
  text: {
    color: colors.white,
  },
  name: {
    fontSize: 15,
    fontWeight: "bold",
  },
  currentPrice: {
    fontSize: 28,
    fontWeight: "bold",
    letterSpacing: 1,
  },
  priceChangePercentage: {
    fontSize: 15,
    fontWeight: "bold",
  },
});

export default PriceTags;
