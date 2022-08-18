import { View, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Text } from "@rneui/themed";
import colors from "../config/colors";

const PriceChange = ({
  price,
  containerOptions = {},
  iconOptions = {},
  textOptions = {},
}) => {
  const percentage = {
    color: price > 0 ? colors.green : colors.danger,
    icon: price > 0 ? "caretup" : "caretdown",
    value: price.toFixed(2),
  };

  const container = {
    ...containerOptions,
    style: [styles.container, containerOptions.style],
  };

  const icon = {
    color: percentage.color,
    name: percentage.icon,
    size: 10,
    ...iconOptions,
    style: [styles.caret, iconOptions.style],
  };

  const text = {
    ...textOptions,
    style: [styles.text, textOptions.style],
  };

  return (
    <View {...container}>
      <AntDesign {...icon} />
      <Text {...text}>{percentage.value}%</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  text: {
    alignItems: "center",
    color: colors.white,
    fontSize: 11,
    marginRight: 5,
  },
  caret: {
    alignSelf: "center",
    marginRight: 3,
  },
});

export default PriceChange;
