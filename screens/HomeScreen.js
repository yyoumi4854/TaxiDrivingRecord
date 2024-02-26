import { useState } from "react";
// import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SvgXml } from "react-native-svg";
import dayjs from "dayjs";
import { svg } from "../assets/svg";
import * as home from "../styles/home.styles";
import * as common from "../styles/common.styles";
import IconButton from "../components/IconButton";

const HomeScreen = () => {
  const [count, setCount] = useState(0);
  const onPress = () => setCount((prevCount) => prevCount + 1);
  // 현재 날짜
  const currentDate = dayjs().format("YYYY-MM-DD");

  return (
    <SafeAreaView style={home.section}>
      <ScrollView>
        <View style={home.yearContainer}>
          <Text style={home.common.colorTitleText}>연간 영업 금액</Text>
          <Text style={home.common.colorText}>3,000,000원</Text>
        </View>
        {/* 월별 운행 기록 */}
        <View>
          {/* 달력 */}
          <View style={[home.monthCalendar.container, common.flex.rowCenter]}>
            <View style={common.flex.rowCenter}>
              <TouchableOpacity
                onPress={onPress}
                style={common.button.iconButton}
              >
                <View style={common.flex.center}>
                  <SvgXml xml={svg.prev} />
                </View>
              </TouchableOpacity>
              <View style={home.monthCalendar.textWrap}>
                <Text style={home.monthCalendar.text}>2024년 2월</Text>
              </View>
              <TouchableOpacity
                onPress={onPress}
                style={common.button.iconButton}
              >
                <View style={common.flex.center}>
                  <SvgXml xml={svg.next} />
                </View>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              onPress={onPress}
              style={[common.button.iconButton, common.button.rightButton]}
            >
              <View style={common.flex.center}>
                <SvgXml xml={svg.turn} />
              </View>
            </TouchableOpacity>
          </View>

          <View style={home.monthInfo}>
            {/* 이번달 영업 금액 */}
            <View style={[common.box.grayBox, home.moneyContainer.container]}>
              <View>
                <Text style={home.common.colorTitleText}>영업금액</Text>
                <Text style={home.common.colorText}>2,000,000원</Text>
              </View>

              <View
                style={[
                  home.moneyContainer.bottomContent,
                  common.flex.rowCenter,
                ]}
              >
                <View style={common.flex.columnCenter}>
                  <Text style={common.text.blackText}>카드</Text>
                  <Text style={home.moneyContainer.text}>2,000,000원</Text>
                </View>
                <View style={common.flex.columnCenter}>
                  <Text style={common.text.blackText}>현금</Text>
                  <Text style={home.moneyContainer.text}>2,000,000원</Text>
                </View>
              </View>
            </View>

            {/* 이번달 운행 정보 */}
            <View style={home.infoGrid.container}>
              <View style={[common.flex.rowCenter, common.box.smallBoxWrap]}>
                <View style={[common.box.grayBox, common.box.smallBox]}>
                  <Text style={common.text.blackText}>LPG 주입량</Text>
                  <View style={common.box.textWarp}>
                    <Text style={common.text.blackBoldText}>100L</Text>
                  </View>
                </View>
                <View style={[common.box.grayBox, common.box.smallBox]}>
                  <Text style={common.text.blackText}>LPG 단가</Text>
                  <View style={common.box.textWarp}>
                    <Text style={common.text.blackBoldText}>1000원</Text>
                  </View>
                </View>
                <View style={[common.box.orangeBox, common.box.smallBox]}>
                  <Text style={common.text.orangeText}>LPG 충전 금액</Text>
                  <View style={common.box.textWarp}>
                    <Text style={common.text.blackBoldText}>100000원</Text>
                  </View>
                </View>
              </View>

              <View style={[common.flex.rowCenter, common.box.smallBoxWrap]}>
                <View style={[common.box.grayBox, common.box.smallBox]}>
                  <Text style={common.text.blackText}>주행거리</Text>
                  <View style={common.box.textWarp}>
                    <Text style={common.text.blackBoldText}>1000km</Text>
                  </View>
                </View>
                <View style={[common.box.grayBox, common.box.smallBox]}>
                  <Text style={common.text.blackText}>영업거리</Text>
                  <View style={common.box.textWarp}>
                    <Text style={common.text.blackBoldText}>1000km</Text>
                  </View>
                </View>
                <View style={[common.box.orangeBox, common.box.smallBox]}>
                  <Text style={common.text.orangeText}>통행료</Text>
                  <View style={common.box.textWarp}>
                    <Text style={common.text.blackBoldText}>1000원</Text>
                  </View>
                </View>
              </View>

              <View style={[common.flex.rowCenter, common.box.smallBoxWrap]}>
                <View style={[common.box.orangeBox, common.box.smallBox]}>
                  <Text style={common.text.orangeText}>연비</Text>
                  <View style={common.box.textWarp}>
                    <Text style={common.text.blackBoldText}>100km/L</Text>
                  </View>
                </View>
                <View style={[common.box.orangeBox, common.box.smallBox]}>
                  <Text style={common.text.orangeText}>LPG 사용량</Text>
                  <View style={common.box.textWarp}>
                    <Text style={common.text.blackBoldText}>10L</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* +버튼 */}
      <IconButton currentDate={currentDate} />
    </SafeAreaView>
  );
};

export default HomeScreen;
