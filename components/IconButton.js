import { Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SvgXml } from "react-native-svg";
import { svg } from "../assets/svg";
import * as common from "../styles/common.styles";
import RecordScreen from "../screens/RecordScreen";

// 추가버튼, 수정버튼
// create, edit
const IconButton = () => {
  const navigation = useNavigation();

  const navigateToOtherComponent = () => {
    navigation.navigate("Record");
  };

  return (
    <TouchableOpacity
      onPress={navigateToOtherComponent}
      style={[common.iconButton.container, common.flex.center]}
    >
      <View>
        <SvgXml xml={svg.plus} fill="#FFA800" />
      </View>
    </TouchableOpacity>
  );
};
export default IconButton;
