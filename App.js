// import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { SvgXml } from "react-native-svg";
import { svg } from "./assets/svg";
import HomeScreen from "./screens/HomeScreen";
import CalendarScreen from "./screens/CalendarScreen";
import ChartScreen from "./screens/ChartScreen";
import MoreScreen from "./screens/MoreScreen";
import { Platform, View, StatusBar } from "react-native";

export default function App() {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer theme={{ colors: { background: "white" } }}>
      <View
        style={{
          paddingTop: Platform.OS === "ios" ? 0 : StatusBar.currentHeight,
        }}
      >
        <StatusBar />
      </View>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            height: 48,
            borderTopColor: "#D9D9D9",
            elevation: 0,
          },
          tabBarActiveTintColor: "#FFA800",
          tabBarInactiveTintColor: "#D9D9D9",
          tabBarShowLabel: false,
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "홈",
            tabBarIcon: ({ color, size }) => (
              <SvgXml xml={svg.home} fill={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Calendar"
          component={CalendarScreen}
          options={{
            title: "달력",
            tabBarIcon: ({ color, size }) => (
              <SvgXml xml={svg.calendar} fill={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Chart"
          component={ChartScreen}
          options={{
            title: "통계",
            tabBarIcon: ({ color, size }) => (
              <SvgXml xml={svg.cart} fill={color} />
            ),
          }}
        />
        <Tab.Screen
          name="More"
          component={MoreScreen}
          options={{
            title: "더보기",
            tabBarIcon: ({ color, size }) => (
              <SvgXml xml={svg.more} fill={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
