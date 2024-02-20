// import { StatusBar } from "expo-status-bar";
// import 'react-native-reanimated';
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import RecordScreen from "./screens/RecordScreen";
import BottomTabNavigator from "./components/BottomTabNavigator";

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer theme={{ colors: { background: "white" } }}>
      {/* 홈 화면 연간 영업 금액 보기 on/off에 따라 배경색상 변경 */}
      <StatusBar backgroundColor="blue" barStyle="light-content" />

      <Stack.Navigator>
        <Stack.Screen
          name="main"
          component={BottomTabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Record"
          component={RecordScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
