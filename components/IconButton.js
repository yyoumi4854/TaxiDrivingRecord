import { Text, TouchableOpacity, View } from "react-native";
import { SvgXml } from "react-native-svg";
import { svg } from "../assets/svg";
import * as common from "../styles/common.styles";

// 추가버튼, 수정버튼
// create, edit
const IconButton = () => {
  return (
    <TouchableOpacity
      //   onPress={onPress}
      style={[common.iconButton.container, common.flex.cneter]}
    >
      <View>
        <SvgXml xml={svg.plus} fill="#FFA800" />
      </View>
    </TouchableOpacity>
  );
};
export default IconButton;
