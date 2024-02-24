import { Text, TouchableOpacity } from "react-native";
import * as common from "../styles/common.styles";

const Button = ({ text, option = "confirm" }) => {
  return (
    <TouchableOpacity
      style={[
        common.flex.center,
        common.button.button,
        common.button[option === "confirm" ? "confirm" : "cancel"],
      ]}
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
export default Button;
