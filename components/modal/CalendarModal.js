// react, react-native
import { useState } from "react";
import { Modal, View, Text } from "react-native";

// library
import dayjs from "dayjs";

// components
import CalendarView from "../CalendarView";
import BasicsButton from "../BasicsButton";

// style
import * as common from "../../styles/common.styles";
import * as modal from "../../styles/modal.styles";

const CalendarModal = ({
  modalVisible,
  setModalVisible,
  selectDate,
  setSelectDate,
}) => {
  const [checkDate, setCheckDate] = useState(selectDate);

  const date = dayjs(checkDate).locale("ko");
  const year = date.year();
  const month = date.month() + 1;
  const day = date.date();
  const dayOfWeek = date.format("ddd");

  const onCancelPress = () => {
    setModalVisible(false);
    setCheckDate(selectDate);
  };

  const onConfirmPress = () => {
    setModalVisible(false);
    setSelectDate(checkDate);
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(false);
      }}
    >
      <View style={modal.common.blackBackground}>
        <View style={modal.common.container}>
          <View>
            <Text style={modal.calendar.year}>{year}년</Text>
            <Text style={modal.calendar.date}>
              {month}월 {day}일 ({dayOfWeek})
            </Text>
            <View style={modal.calendar.container}>
              <CalendarView checkDate={checkDate} setCheckDate={setCheckDate} />
            </View>
          </View>

          <View
            style={[
              common.flex.rowCenter,
              common.button.buttonsContainer,
              modal.common.buttonsWrap,
            ]}
          >
            <BasicsButton
              text={"취소"}
              option={"cancel"}
              onButtonPress={onCancelPress}
            />
            <BasicsButton text={"변경"} onButtonPress={onConfirmPress} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default CalendarModal;
