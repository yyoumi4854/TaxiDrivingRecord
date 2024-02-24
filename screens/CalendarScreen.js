import { SafeAreaView, ScrollView } from "react-native";
import CalendarView from "../components/CalendarView";

const CalendarScreen = () => {
  return (
    <SafeAreaView>
      <CalendarView />
      <ScrollView></ScrollView>
    </SafeAreaView>
  );
};
export default CalendarScreen;
