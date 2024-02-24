import { Text, View } from "react-native";
import * as common from "../styles/common.styles";
import * as record from "../styles/record.styles";

const RecordBox = ({ title, state, unit = "원", option = "basics" }) => {
  const isNum = (text) => {
    const number = parseInt(text);
    return isNaN(number) ? 0 : number;
  };

  return (
    <View
      style={[
        common.box[option === "basics" ? "grayBox" : "orangeBox"],
        record.calculateWrap.calculateBox,
      ]}
    >
      <Text
        style={[
          record.calculateWrap.title,
          option === "basics" ? "" : { color: "#FF7B00" },
        ]}
      >
        {title}
      </Text>
      <View style={record.calculateWrap.valueWrap}>
        <Text style={common.text.blackBoldText}>{`${isNum(
          state
        )}${unit}`}</Text>
      </View>
    </View>
  );
};

export default RecordBox;
