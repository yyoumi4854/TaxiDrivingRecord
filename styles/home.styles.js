import { StyleSheet } from "react-native";

export const common = StyleSheet.create({
  colorTitleText: {
    textAlign: "center",
    fontSize: 14,
    // fontWeight: 500,
    color: "#FF7B00",
  },
  colorText: {
    textAlign: "center",
    fontSize: 20,
    // fontWeight: 700,
    color: "#FF7B00",
    marginTop: 4,
  },
});

export const section = StyleSheet.create({
  position: "relative",
});
export const yearContainer = StyleSheet.create({
  paddingVertical: 20,
  backgroundColor: "#FFEFD2",
  textAlign: "center",
});
export const monthCalendar = StyleSheet.create({
  container: {
    paddingVertical: 8,
    position: "relative",
  },
  textWrap: {
    paddingHorizontal: 8,
  },
  text: {
    fontSize: 20,
    color: "#333",
  },
  rightButton: {
    position: "absolute",
    top: "50%",
    right: 20,
  },
});

export const monthInfo = StyleSheet.create({
  paddingHorizontal: 16,
  paddingVertical: 20,
});

export const moneyContainer = StyleSheet.create({
  container: {
    paddingVertical: 16,
  },
  bottomContent: {
    marginTop: 16,
  },
  titleText: {
    fontSize: 14,
    color: "#333",
    textAlign: "center",
  },
  text: {
    fontSize: 18,
    color: "#333",
    textAlign: "center",
    marginTop: 4,
  },
});

export const infoGrid = StyleSheet.create({
  container: {
    marginTop: 16,
  },
});
