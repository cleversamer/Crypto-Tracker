import { Image, Text } from "@rneui/themed";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import colors from "../../config/colors";
import useNavigation from "../../navigation/useNavigation";
import routes from "../../navigation/routes";

const wrapperOptions = {
  activeOpacity: 0.1,
  delayPressOut: 60,
};

const CoinItem = ({ coin }) => {
  const navigation = useNavigation();
  const isPositive = coin.price_change_percentage_24h > 0;
  const percentage = {
    color: isPositive ? colors.green : colors.danger,
    icon: isPositive ? "caretup" : "caretdown",
    value: coin.price_change_percentage_24h.toFixed(2),
  };

  const handlePress = () => navigation.navigate(routes.COIN_DETAILS, coin);

  return (
    <TouchableOpacity {...wrapperOptions} onPress={handlePress}>
      <View style={styles.container}>
        <Image source={{ uri: coin.image }} style={styles.image} />

        <View>
          <Text style={styles.title}>{coin.name}</Text>

          <View style={styles.infoContainer}>
            <View style={styles.rank.container}>
              <Text style={[styles.text, styles.rank.text]}>
                {coin.market_cap_rank}
              </Text>
            </View>

            <Text style={[styles.text, styles.symbol]}>{coin.symbol}</Text>

            <AntDesign
              color={percentage.color}
              name={percentage.icon}
              size={10}
              style={styles.caret}
            />

            <Text style={[styles.text, styles.percentage]}>
              {percentage.value}%
            </Text>
          </View>
        </View>

        <View style={styles.rightContainer}>
          <Text style={styles.title}>${coin.current_price}</Text>

          <Text style={[styles.text, styles.marketCap]}>
            {coin.market_cap} USDT
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderBottomColor: colors.gray,
    borderBottomWidth: 0.3,
    flexDirection: "row",
    padding: 15,
  },
  rightContainer: {
    alignItems: "flex-end",
    marginLeft: "auto",
  },
  infoContainer: {
    flexDirection: "row",
  },
  image: {
    alignSelf: "center",
    height: 35,
    marginRight: 10,
    width: 35,
  },
  title: {
    color: colors.white,
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 3,
  },
  text: {
    color: colors.white,
    fontSize: 11,
    marginRight: 5,
  },
  marketCap: {
    color: colors.white,
    fontSize: 10,
  },
  symbol: {
    alignSelf: "center",
    fontSize: 11,
    textTransform: "uppercase",
  },
  percentage: {
    alignItems: "center",
  },
  rank: {
    container: {
      alignItems: "center",
      alignSelf: "center",
      backgroundColor: colors.darkGrey,
      borderRadius: 4,
      justifyContent: "center",
      marginRight: 5,
      paddingHorizontal: 5,
    },
    text: {
      fontWeight: "bold",
      marginRight: 0,
    },
  },
  caret: {
    alignSelf: "center",
    marginRight: 3,
  },
});

export default CoinItem;
