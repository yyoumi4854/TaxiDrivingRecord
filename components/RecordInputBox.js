import { Text, View, TextInput } from "react-native";
import * as common from "../styles/common.styles";
import * as record from "../styles/record.styles";

const RecordInputBox = ({ title, state, category, unit = "원", onChange }) => {
  const isNum = (text) => {
    const number = parseInt(text);
    return isNaN(number) ? 0 : number;
  };

  return (
    <View style={record.inputWrap.inputBox}>
      <Text style={record.inputWrap.inputBoxTitle}>{title}</Text>
      <View style={[common.flex.rowCenter, record.inputWrap.textInputWrap]}>
        <TextInput
          placeholder="0"
          keyboardType="numeric"
          value={state.toString()}
          onChangeText={(text) => onChange(category, isNum(text))}
          style={record.inputWrap.textInput}
        ></TextInput>
        <Text style={record.inputWrap.unitText}>{unit}</Text>
      </View>
    </View>
  );
};

export default RecordInputBox;
