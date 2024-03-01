import { StyleSheet } from "react-native";

export const container = StyleSheet.create({
  calendar: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBoWidth: 1,
    borderBottomColor: "#D9D9D9",
  },
  scrollWrap: {
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  emptyWrap: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
  recorder: {
    marginTop: 8,
    marginBottom: 20,
  },
  button: {
    padding: 16,
    marginBottom: 32,
  },
});

export const text = StyleSheet.create({
  title: {
    color: "#FF7B00",
    fontSize: 14,
  },
  emptyText: {
    textAlign: "center",
    color: "#888888",
    fontSize: 16,
  },
});
