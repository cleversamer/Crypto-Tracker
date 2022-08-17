import { StyleSheet, KeyboardAvoidingView, Platform } from "react-native";
import colors from "../config/colors";

const withKeyboardAvoidingView =
  (Content, options = {}) =>
  (props) => {
    return (
      <KeyboardAvoidingView
        behaviour={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={90}
        style={[styles.container, options.style]}
        {...options}
      >
        <Content {...props} />
      </KeyboardAvoidingView>
    );
  };

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
});

export default withKeyboardAvoidingView;
