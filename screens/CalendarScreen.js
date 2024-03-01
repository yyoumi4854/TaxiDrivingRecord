// react, react-native
import { useState } from "react";
import { SafeAreaView, ScrollView, View, Text } from "react-native";
import CalendarView from "../components/CalendarView";

// library
import dayjs from "dayjs";

// components
import RecordBox from "../components/RecordBox";
import BasicsButton from "../components/BasicsButton";
import DeleteModal from "../components/modal/DeleteModal";

// style
import * as common from "../styles/common.styles";
import * as calendar from "../styles/calendar.styles";

const CalendarScreen = () => {
  const currentDate = dayjs().format("YYYY-MM-DD");
  const [checkDate, setCheckDate] = useState(currentDate);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* 달력 */}
      <View style={calendar.container.calendar}>
        <CalendarView checkDate={checkDate} setCheckDate={setCheckDate} />
      </View>

      <ScrollView style={calendar.container.scrollWrap}>
        <View>
          <Text style={calendar.text.title}>
            {dayjs(checkDate).format("YYYY년 M월 DD일")} 운행정보
          </Text>
        </View>
        {/* 운영정보 */}
        <View style={calendar.container.recorder}>
          <View style={[common.flex.rowCenter, common.box.smallBoxWrap]}>
            <RecordBox title={"카드"} state={"0"} />
            <RecordBox title={"현금"} state={"0"} />
            <RecordBox title={"영업금액"} state={"0"} option={"orange"} />
          </View>

          <View style={[common.flex.rowCenter, common.box.smallBoxWrap]}>
            <RecordBox title={"LPG 주입량"} state={"0"} unit={"L"} />
            <RecordBox title={"LPG 단가"} state={"0"} />
            <RecordBox title={"LPG 충전 금액"} state={"0"} option={"orange"} />
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
              unit={"km/L"}
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

        {/* 삭제, 수정 */}
        <View
          style={[
            calendar.container.button,
            common.flex.rowCenter,
            common.button.buttonsContainer,
          ]}
        >
          <BasicsButton
            text={"삭제"}
            option={"cancel"}
            onButtonPress={() => setModalVisible(true)}
          />
          <BasicsButton text={"수정"} />
        </View>
      </ScrollView>

      <DeleteModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        checkDate={checkDate}
      />
    </SafeAreaView>
  );
};
export default CalendarScreen;
