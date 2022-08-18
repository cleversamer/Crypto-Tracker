import { Text } from "@rneui/themed";
import { View, StyleSheet } from "react-native";
import mapper from "../../utilities/mapper";
import colors from "../../config/colors";
import PriceChange from "../PriceChange";

const PriceTags = ({ coin }) => {
  const current_price = mapper.separateByComma(coin.current_price);

  return (
    <View style={styles.container}>
      <View>
        <Text style={[styles.text, styles.name]}>{coin.name}</Text>
        <Text style={[styles.text, styles.currentPrice]}>${current_price}</Text>
      </View>

      <PriceChange
        iconOptions={{ size: 18 }}
        price={coin.price_change_percentage_24h}
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
  text: {
    color: colors.white,
  },
  name: {
    fontSize: 16,
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
