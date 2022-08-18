import { TouchableOpacity } from "react-native";

const withTouchableOpacity =
  (Content, options = {}) =>
  (props) => {
    return (
      <TouchableOpacity {...options} style={options.style}>
        <Content {...props} />
      </TouchableOpacity>
    );
  };

export default withTouchableOpacity;
