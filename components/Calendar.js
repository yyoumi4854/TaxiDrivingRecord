import { Text, TouchableOpacity, View } from "react-native";
import { SvgXml } from "react-native-svg";
import { svg } from "../assets/svg";
import * as common from "../styles/common.styles";

const Calendar = () => {
  return (
    <View>
      {/* 달력 */}
      <View style={[common.flex.rowCenter]}>
        <View style={common.flex.rowCenter}>
          <TouchableOpacity
            // onPress={onPress}
            style={common.button.iconButton}
          >
            <View style={common.flex.center}>
              <SvgXml xml={svg.prev} />
            </View>
          </TouchableOpacity>

          <View>
            <Text>2024년 2월</Text>
          </View>

          <TouchableOpacity
            // onPress={onPress}
            style={common.button.iconButton}
          >
            <View style={common.flex.center}>
              <SvgXml xml={svg.next} />
            </View>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          //   onPress={onPress}
          style={[common.button.iconButton, common.button.rightButton]}
        >
          <View style={common.flex.center}>
            <SvgXml xml={svg.turn} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Calendar;
