import { Text, TouchableOpacity } from "react-native";
import * as common from "../styles/common.styles";

const BasicsButton = ({ text, option = "confirm", setModalVisible = "" }) => {
  return (
    <TouchableOpacity
      style={[
        common.flex.center,
        common.button.button,
        common.button[option === "confirm" ? "confirm" : "cancel"],
      ]}
      onPress={() => (option === "confirm" ? "" : setModalVisible(false))}
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
