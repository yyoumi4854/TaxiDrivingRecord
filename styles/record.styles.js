import { StyleSheet } from "react-native";

export const common = StyleSheet.create({
  titleText: {
    fontSize: 14,
    color: "#FF7B00",
  },
});

export const header = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  leftContainer: {
    gap: 4,
  },
  dayText: {
    fontSize: 16,
  },
});

export const section = StyleSheet.create({
  paddingHorizontal: 16,
  marginBottom: 74,
});

export const inputWrap = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  inputBoxWrap: {
    gap: 8,
    marginTop: 8,
  },
  inputBox: {
    flex: 1,
    padding: 8,
    borderRadius: 10,
    backgroundColor: "#F5F5F7",
  },
  inputBoxTitle: {
    fontSize: 14,
    textAlign: "center",
  },
  textInputWrap: {
    justifyContent: "space-between",
    marginTop: 4,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 16,
    backgroundColor: "#FFFFFF",
  },
  textInput: {
    fontSize: 14,
    color: "#333",
    flex: 1,
  },
  unitText: {
    fontSize: 12,
    color: "#888888",
  },
});

export const calculateWrap = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingVertical: 20,
    borderTopWidth: 1,
    borderColor: "#D9D9D9",
  },
  calculateBoxWrap: {
    marginTop: 8,
  },
  calculateBox: {
    flex: 1,
    padding: 8,
  },
  title: {
    fontSize: 12,
    textAlign: "center",
  },
  valueWrap: {
    marginTop: 8,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 16,
    backgroundColor: "#FFFFFF",
  },
  mathOperatorWrap: {
    paddingHorizontal: 2,
  },
});

export const buttons = StyleSheet.create({
  container: {
    position: "absolute",
    left: 0,
    bottom: 0,
    padding: 16,
  },
});
