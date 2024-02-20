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
  center: {
    flex: 1,
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

  buttonsContainer: {
    gap: 8,
  },
  button: {
    flex: 1,
    height: 42,
    borderRadius: 10,
  },
  cancel: {
    borderWidth: 1,
    borderColor: "#FFA800",
  },
  confirm: {
    backgroundColor: "#FFA800",
  },
  cancelText: {
    color: "#FFA800",
    fontSize: 14,
  },
  confirmText: {
    color: "#FFF",
    fontSize: 14,
  },
});

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

export const iconButton = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 20,
    right: 16,
    width: 56,
    height: 56,
    borderRadius: 56,
    backgroundColor: "#FFEFD2",
  },
  icon: {},
});
