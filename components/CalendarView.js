// react, react-native
import { View } from "react-native";
import { Calendar, LocaleConfig } from "react-native-calendars";
import { SvgXml } from "react-native-svg";

// assets, utils
import { svg } from "../assets/svg";

// 달력 한글 적용
LocaleConfig.locales["ko"] = {
  monthNames: [
    "1월",
    "2월",
    "3월",
    "4월",
    "5월",
    "6월",
    "7월",
    "8월",
    "9월",
    "10월",
    "11월",
    "12월",
  ],
  monthNamesShort: [
    "1월",
    "2월",
    "3월",
    "4월",
    "5월",
    "6월",
    "7월",
    "8월",
    "9월",
    "10월",
    "11월",
    "12월",
  ],
  dayNames: ["일", "월", "화", "수", "목", "금", "토"],
  dayNamesShort: ["일", "월", "화", "수", "목", "금", "토"],
  today: "오늘",
};
LocaleConfig.defaultLocale = "ko";

const CalendarView = ({ checkDate, setCheckDate }) => {
  const markedDates = {
    "2024-02-16": { marked: true },
    "2024-02-17": { marked: true },
    "2024-02-18": { marked: true },
  };

  const markedSelectedDates = {
    ...markedDates,
    [checkDate]: {
      selected: true,
      marked: markedDates[checkDate]?.marked,
      dotColor: "#FF7B00",
      customStyles: {
        container: {
          backgroundColor: "#FFEFD2",
          borderRadius: 10,
        },
        text: {
          color: "#333",
        },
      },
    },
  };

  const customTheme = {
    // year, month
    textSectionTitleColor: "#333",
    textSectionTitleDisabledColor: "#333",
    textDayHeaderFontSize: 16,
    // dot
    dotColor: "#FF7B00",
    // today
    todayTextColor: "#FF7B00",
  };

  const onDayPress = (day) => {
    setCheckDate(day.dateString);
  };

  return (
    <View>
      {/* Calendar */}
      <Calendar
        markingType={"custom"}
        markedDates={markedSelectedDates}
        onDayPress={onDayPress}
        theme={customTheme}
        monthFormat={"yyyy년 M월"}
        renderArrow={(direction) =>
          direction === "left" ? (
            <SvgXml xml={svg.prev} />
          ) : (
            <SvgXml xml={svg.next} />
          )
        }
      />
    </View>
  );
};
export default CalendarView;
