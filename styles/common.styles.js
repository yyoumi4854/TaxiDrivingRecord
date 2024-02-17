import { StyleSheet } from "react-native";

export const flex = StyleSheet.create({
  rowCenter: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  columnCenter: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});

export const text = StyleSheet.create({
  blackText: {
    color: "#333",
    fontSize: 14,
    textAlign: "center",
  },
  orangeText: {
    color: "#FF7B00",
    fontSize: 14,
    textAlign: "center",
  },
  blackBoldText: {
    color: "#333",
    fontSize: 14,
    textAlign: "center",
    //   fontWeight: 700
  },
});

export const button = StyleSheet.create({
  iconButton: {
    width: 32,
    height: 32,
  },
  rightButton: {
    position: "absolute",
    top: 8,
    right: 16,
  },
});
// export const button = StyleSheet.create({});

export const box = StyleSheet.create({
  grayBox: {
    backgroundColor: "#F5F5F7",
    borderRadius: 10,
  },
  orangeBox: {
    backgroundColor: "#FFEFD2",
    borderRadius: 10,
  },
  smallBoxWrap: {
    gap: 8,
    marginTop: 8,
  },
  smallBox: {
    flex: 1,
    paddingHorizontal: 4,
    paddingVertical: 8,
  },
  titleText: {},
  textWarp: {
    marginTop: 4,
    paddingVertical: 2,
    borderRadius: 12,
    backgroundColor: "#fff",
  },
});
