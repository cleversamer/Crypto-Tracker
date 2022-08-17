import { StyleSheet, TouchableOpacity } from "react-native";
import colors from "../config/colors";

const withTouchableOpacity = (Content, options) => (props) => {
  return (
    <TouchableOpacity {...options} style={[styles.container, options.style]}>
      <Content {...props} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
});

export default withTouchableOpacity;
