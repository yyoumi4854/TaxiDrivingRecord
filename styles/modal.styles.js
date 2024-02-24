import { StyleSheet } from "react-native";

export const common = StyleSheet.create({
  blackBackground: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
  container: {
    marginHorizontal: 20,
    padding: 20,
    borderRadius: 10,
    backgroundColor: "#fff",
  },
  buttonsWrap: {
    marginTop: 20,
  },
});

export const calendar = StyleSheet.create({
  year: {
    fontSize: 14,
    color: "#888",
  },
  date: {
    fontSize: 20,
    color: "#333",
  },
  container: {
    marginTop: 20,
  },
});
