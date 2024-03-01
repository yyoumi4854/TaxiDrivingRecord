// react, react-native
import { Modal, View, Text, Button } from "react-native";

// library
import dayjs from "dayjs";

// components
import BasicsButton from "../BasicsButton";

// style
import * as common from "../../styles/common.styles";
import * as modal from "../../styles/modal.styles";

const DeleteModal = ({ modalVisible, setModalVisible, checkDate }) => {
  const onCancelPress = () => {
    setModalVisible(false);
  };

  const onConfirmPress = () => {
    setModalVisible(false);
    // 데이터 삭제
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
          <Text style={modal.common.titleText}>
            운행정보 기록 <Text style={modal.common.titleTextOrange}>삭제</Text>
            하기
          </Text>

          <View style={modal.common.textWrap}>
            <Text style={modal.common.text}>
              <Text style={common.text.orangeText}>
                {dayjs(checkDate).format("YYYY년 M월 DD일")}
              </Text>{" "}
              운행정보기록을{"\n"}
              삭제하시겠습니까?
            </Text>
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
            <BasicsButton text={"확인"} onButtonPress={onConfirmPress} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default DeleteModal;
