import { useState } from "react";
import { TouchableOpacity, Switch, Text, View } from "react-native";
import { SvgXml } from "react-native-svg";

// assets, utils
import { svg } from "../assets/svg";

import * as common from "../styles/common.styles";
import * as more from "../styles/more.styles";

const MoreScreen = () => {
  const [isEnabled, setIsEnabled] = useState(true);

  // 스위치 상태가 변경될 때 호출되는 함수
  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
  };
  return (
    <View>
      {/* 데이터 저장하기 */}
      <View style={more.common.container}>
        <View style={more.common.leftWrap}>
          <View style={more.common.titleTextWrap}>
            <SvgXml xml={svg.save} fill="#333" />
            <Text style={more.common.title}>데이터 저장하기</Text>
          </View>

          <View style={more.common.descriptionWrap}>
            <Text style={more.common.description}>
              데이터 저장하기대한 설명
            </Text>
          </View>
        </View>

        <TouchableOpacity
          style={more.common.button}
          //   onPress={onNextPress}
        >
          <View style={common.flex.center}>
            <SvgXml xml={svg.next} />
          </View>
        </TouchableOpacity>
      </View>

      {/* 홈 화면 연간 영업 금액 보기 */}
      <View style={more.common.container}>
        <View style={more.common.leftWrap}>
          <View style={more.common.titleTextWrap}>
            <SvgXml xml={svg.enabled} fill="#333" />
            <Text style={more.common.title}>홈 화면 연간 영업 금액 보기</Text>
          </View>

          <View style={more.common.descriptionWrap}>
            <Text style={more.common.description}>
              홈 화면에 연간 영업 금액 보이기 여부를 on/off 설정할 수 있어요.
            </Text>
          </View>
        </View>

        <Switch
          trackColor={{ false: "#F5F5F7", true: "#FFEFD2" }}
          thumbColor={isEnabled ? "#FFA800" : "#D9D9D9"}
          //   ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
    </View>
  );
};
export default MoreScreen;
