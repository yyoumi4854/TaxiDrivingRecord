// react, react-native
import { Text, TouchableOpacity } from "react-native";

// style
import * as common from "../styles/common.styles";

const BasicsButton = ({ text, option = "confirm", onButtonPress }) => {
  return (
    <TouchableOpacity
      style={[
        common.flex.center,
        common.button.button,
        common.button[option === "confirm" ? "confirm" : "cancel"],
      ]}
      onPress={onButtonPress}
    >
      <Text
        style={
          common.button[option === "confirm" ? "confirmText" : "cancelText"]
        }
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};
export default BasicsButton;
