import { View, StyleSheet } from "react-native";
import { Text } from "@rneui/themed";
import colors from "../config/colors";

const Rank = ({ rank, containerOptions = {}, textOptions = {} }) => {
  const container = {
    ...containerOptions,
    style: [styles.container, containerOptions.style],
  };

  const text = {
    ...textOptions,
    style: [styles.text, textOptions.style],
  };

  return (
    <View {...container}>
      <Text {...text}>{rank}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
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
    color: colors.white,
    fontSize: 11,
    fontWeight: "bold",
    marginRight: 0,
  },
});

export default Rank;
