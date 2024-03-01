// react, react-native
import { useState } from "react";
import { SafeAreaView, View } from "react-native";

// library
import dayjs from "dayjs";

// components
import CalendarView from "../components/CalendarView";
import RecordedView from "../components/calendarScreen/RecordedView";
import EmptyRecordedView from "../components/calendarScreen/EmptyRecordedView";

// style
import * as calendar from "../styles/calendar.styles";

const CalendarScreen = () => {
  const currentDate = dayjs().format("YYYY-MM-DD");
  const [checkDate, setCheckDate] = useState(currentDate);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* 달력 */}
      <View style={calendar.container.calendar}>
        <CalendarView checkDate={checkDate} setCheckDate={setCheckDate} />
      </View>

      {/* 선택한 날짜에 데이터가 있는지 없는지 확인 */}
      <RecordedView checkDate={checkDate} />
      {/* <EmptyRecordedView /> */}
    </SafeAreaView>
  );
};
export default CalendarScreen;
