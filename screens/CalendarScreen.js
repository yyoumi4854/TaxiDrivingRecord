import { SafeAreaView, ScrollView } from "react-native";
import Calendar from "../components/Calendar";

const CalendarScreen = () => {
  return (
    <SafeAreaView>
      <Calendar />
      <ScrollView></ScrollView>
    </SafeAreaView>
  );
};
export default CalendarScreen;
