// react, react-native
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

// library
import dayjs from "dayjs";

// assets, utils
import { svg } from "../assets/svg";

// components
import IconButton from "../components/IconButton";
import RecordBox from "../components/RecordBox";

// style
import * as home from "../styles/home.styles";
import * as common from "../styles/common.styles";

const HomeScreen = () => {
  // 현재 날짜 : 년-월-일
  const currentDate = dayjs().format("YYYY-MM-DD");
  const [selectDate, setSelectDate] = useState(currentDate);

  const date = dayjs(selectDate);
  const year = date.year();
  const month = date.month() + 1;

  // 이전 달력으로 이동
  const onPrevPress = () => {
    const newDate = dayjs(selectDate).subtract(1, "month").format("YYYY-MM-DD");
    setSelectDate(newDate);
  };
  // 다음 달력으로 이동
  const onNextPress = () => {
    const newDate = dayjs(selectDate).add(1, "month").format("YYYY-MM-DD");
    setSelectDate(newDate);
  };
  // 현재 달로 이동
  const onCurrentPress = () => {
    setSelectDate(currentDate);
  };

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
                style={common.button.iconButton}
                onPress={onPrevPress}
              >
                <View style={common.flex.center}>
                  <SvgXml xml={svg.prev} />
                </View>
              </TouchableOpacity>
              <View style={home.monthCalendar.textWrap}>
                <Text style={home.monthCalendar.text}>
                  {year}년 {month}월{/* {selectDate} */}
                </Text>
              </View>
              <TouchableOpacity
                style={common.button.iconButton}
                onPress={onNextPress}
              >
                <View style={common.flex.center}>
                  <SvgXml xml={svg.next} />
                </View>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={[common.button.iconButton, common.button.rightButton]}
              onPress={onCurrentPress}
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
                <RecordBox title={"LPG 주입량"} state={"0"} unit={"L"} />
                <RecordBox title={"LPG 단가"} state={"0"} />
                <RecordBox
                  title={"LPG 충전 금액"}
                  state={"0"}
                  option={"orange"}
                />
              </View>

              <View style={[common.flex.rowCenter, common.box.smallBoxWrap]}>
                <RecordBox title={"주행거리"} state={"0"} unit={"km"} />
                <RecordBox title={"영업거리"} state={"0"} unit={"km"} />
                <RecordBox title={"통행료"} state={"0"} />
              </View>

              <View style={[common.flex.rowCenter, common.box.smallBoxWrap]}>
                <RecordBox
                  title={"연비"}
                  state={"0"}
                  unit={"km"}
                  option={"orange"}
                />
                <RecordBox
                  title={"LPG 사용량"}
                  state={"0"}
                  unit={"L"}
                  option={"orange"}
                />
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
