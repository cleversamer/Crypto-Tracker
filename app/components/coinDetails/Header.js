import { View, StyleSheet } from "react-native";
import { EvilIcons, Ionicons } from "@expo/vector-icons";
import { Image, Text } from "@rneui/themed";
import useNavigation from "../../navigation/useNavigation";
import colors from "../../config/colors";
import Rank from "../Rank";

const CoinDetailsHeader = ({ coin }) => {
  const navigation = useNavigation();

  const goBack = () => navigation.goBack();

  return (
    <View style={styles.container}>
      <Ionicons
        color={colors.white}
        name="chevron-back-sharp"
        onPress={goBack}
        size={30}
      />

      <View style={styles.tickerContainer}>
        <Image source={{ uri: coin.image.small }} style={styles.image} />

        <Text style={[styles.text, styles.symbol]}>{coin.symbol}</Text>

        <Rank rank={coin.market_data.market_cap_rank} />
      </View>

      <EvilIcons name="user" size={30} color={colors.white} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  tickerContainer: {
    alignItems: "flex-end",
    flexDirection: "row",
  },
  image: {
    height: 20,
    width: 20,
  },
  text: {
    color: colors.white,
  },
  symbol: {
    fontSize: 15,
    fontWeight: "bold",
    marginHorizontal: 7,
    textTransform: "uppercase",
  },
});

export default CoinDetailsHeader;
