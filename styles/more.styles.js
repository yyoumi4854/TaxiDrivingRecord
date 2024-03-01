import { StyleSheet } from "react-native";

export const common = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 20,
    paddingHorizontal: 16,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBoWidth: 1,
    borderBottomColor: "#D9D9D9",
  },
  leftWrap: {
    flex: 1,
  },
  titleTextWrap: {
    flexDirection: "row",
    gap: 4,
  },
  title: {
    fontSize: 18,
    color: "#333",
  },
  descriptionWrap: {
    marginTop: 4,
    paddingLeft: 24,
    lineHeight: 20,
  },
  description: {
    color: "#888",
  },
  button: {
    width: 32,
  },
});
