// import { StatusBar } from "expo-status-bar";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./navigation/StackNavigator";

export default function App() {
  return (
    <NavigationContainer theme={{ colors: { background: "white" } }}>
      {/* 홈 화면 연간 영업 금액 보기 on/off에 따라 배경색상 변경 */}
      <StatusBar backgroundColor="blue" barStyle="light-content" />
      <StackNavigator />
    </NavigationContainer>
  );
}
