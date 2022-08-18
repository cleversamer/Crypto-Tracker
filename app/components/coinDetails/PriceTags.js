import { Text } from "@rneui/themed";
import { View, StyleSheet } from "react-native";
import colors from "../../config/colors";

const PriceTags = ({ coin }) => {
  return (
    <View style={styles.container}>
      <Text style={{ color: colors.white }}>{coin.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default PriceTags;
