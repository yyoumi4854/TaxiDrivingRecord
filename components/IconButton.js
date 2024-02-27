// react, react-native
import { TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SvgXml } from "react-native-svg";

// assets, utils
import { svg } from "../assets/svg";

// style
import * as common from "../styles/common.styles";

// 추가버튼
// create
const IconButton = ({ currentDate }) => {
  const navigation = useNavigation();

  const navigateToOtherComponent = () => {
    navigation.navigate("Record", { selectedDate: currentDate });
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
