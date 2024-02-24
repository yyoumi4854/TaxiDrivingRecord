import { useState } from "react";
import { Modal, View, Text } from "react-native";
import dayjs from "dayjs";
import "dayjs/locale/ko"; // 한국어 locale 추가
import CalendarView from "../CalendarView";
import BasicsButton from "../BasicsButton";
import * as common from "../../styles/common.styles";
import * as modal from "../../styles/modal.styles";

const CalendarModal = ({ modalVisible, setModalVisible }) => {
  const currentDate = dayjs().format("YYYY-MM-DD");
  const [selectedDate, setSelectedDate] = useState(currentDate);

  const date = dayjs(selectedDate).locale("ko");
  const year = date.year();
  const month = date.month() + 1;
  const day = date.date();
  const dayOfWeek = date.format("ddd");

  return (
    <Modal
      animationType="slide"
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
              <CalendarView
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
              />
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
              setModalVisible={setModalVisible}
            />
            <BasicsButton text={"확인"} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default CalendarModal;
