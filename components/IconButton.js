import { TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SvgXml } from "react-native-svg";
import { svg } from "../assets/svg";
import * as common from "../styles/common.styles";

// 추가버튼
// create
const IconButton = ({ currentDate }) => {
  const navigation = useNavigation();

  const navigateToOtherComponent = () => {
    navigation.navigate("Record", { selectDate: currentDate });
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
