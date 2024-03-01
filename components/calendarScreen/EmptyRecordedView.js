import { Text, View } from "react-native";

import * as calendar from "../../styles/calendar.styles";

const EmptyRecordedView = () => {
  return (
    <View style={calendar.container.emptyWrap}>
      <Text style={calendar.text.emptyText}>운행정보가 없습니다.</Text>
    </View>
  );
};

export default EmptyRecordedView;
