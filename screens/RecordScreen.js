import { useState, useEffect, useReducer } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SvgXml } from "react-native-svg";
import { svg } from "../assets/svg";
import RecordInputBox from "../components/RecordInputBox";
import * as calculate from "../utils/calculate";
import * as record from "../styles/record.styles";
import * as common from "../styles/common.styles";
import RecordBox from "../components/RecordBox";
import BasicsButton from "../components/BasicsButton";
import CalendarModal from "../components/modal/CalendarModal";
import dayjs from "dayjs";

function reducer(state, action) {
  return {
    ...state,
    [action.name]: parseInt(action.value),
  };
}

const RecordScreen = ({ route }) => {
  const navigation = useNavigation();
  const { selectDate } = route.params;

  // 이전 페이지로 이동
  const goBack = () => {
    navigation.goBack();
  };

  const [modalVisible, setModalVisible] = useState(false);
  const [state, dispatch] = useReducer(reducer, {
    date: selectDate,
    card: "", // 카드
    cash: "", // 현금
    lpgInjectionVolume: "", // LPG 주입량
    lpgUnitPrice: "", // LPG 단가
    mileage: "", // 주행거리
    businessDistance: "", // 영업거리
    toll: "", // 통행료
    operatingAmount: "", // 영업금액
    lpgChargeAmount: "", // LPG 충전 금액
    fuelEfficiency: "", // 연비
    lpgUsage: "", // LPG 사용량
  });

  const {
    date,
    card,
    cash,
    lpgInjectionVolume,
    lpgUnitPrice,
    mileage,
    businessDistance,
    toll,
    operatingAmount,
    lpgChargeAmount,
    fuelEfficiency,
    lpgUsage,
  } = state;

  const onChange = (name, value) => {
    dispatch({ name, value });
  };

  // 영업금액
  useEffect(() => {
    onChange("operatingAmount", calculate.operatingAmount(card, cash));
  }, [card, cash]);

  // LPG 충전 금액
  useEffect(() => {
    onChange(
      "lpgChargeAmount",
      calculate.lpgChargeAmount(lpgInjectionVolume, lpgUnitPrice)
    );
  }, [lpgInjectionVolume, lpgUnitPrice]);

  // 연비
  useEffect(() => {
    onChange(
      "fuelEfficiency",
      calculate.fuelEfficiency(mileage, lpgInjectionVolume)
    );
  }, [mileage, lpgInjectionVolume]);

  // LPG 사용량
  useEffect(() => {
    onChange("lpgUsage", calculate.lpgUsage(mileage, fuelEfficiency));
  }, [mileage, fuelEfficiency]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* 헤더 */}
      <View style={[common.flex.rowCenter, record.header.container]}>
        <View style={[common.flex.rowCenter, record.header.leftContainer]}>
          <TouchableOpacity onPress={goBack} style={[common.button.iconButton]}>
            <View style={common.flex.center}>
              <SvgXml xml={svg.prev} />
            </View>
          </TouchableOpacity>

          <Text style={record.header.dayText}>
            {dayjs(date).year()}년 {dayjs(date).month() + 1}월{" "}
            {dayjs(date).date()}일
          </Text>
        </View>

        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={[common.button.iconButton]}
        >
          <View style={common.flex.center}>
            <SvgXml xml={svg.calendar} fill={"#FFA800"} />
          </View>
        </TouchableOpacity>
      </View>

      <CalendarModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />

      {/* 운행정보 기록하기 */}
      <ScrollView style={[record.section]}>
        {/* 운행정보 기록 */}
        <View style={record.inputWrap.container}>
          <Text style={record.common.titleText}>기본 운행 정보 기록하기</Text>

          {/* 카드, 현금 */}
          <View style={[common.flex.rowCenter, record.inputWrap.inputBoxWrap]}>
            <RecordInputBox
              title={"카드"}
              state={card}
              category={"card"}
              onChange={onChange}
            />
            <RecordInputBox
              title={"현금"}
              state={cash}
              category={"cash"}
              onChange={onChange}
            />
          </View>

          {/* LPG 주입량, LPG 단가 */}
          <View style={[common.flex.rowCenter, record.inputWrap.inputBoxWrap]}>
            <RecordInputBox
              title={"LPG 주입량"}
              state={lpgInjectionVolume}
              category={"lpgInjectionVolume"}
              unit={"L"}
              onChange={onChange}
            />

            <RecordInputBox
              title={"LPG 단가"}
              state={lpgUnitPrice}
              category={"lpgUnitPrice"}
              onChange={onChange}
            />
          </View>

          {/* 주행거리, 영업거리 */}
          <View style={[common.flex.rowCenter, record.inputWrap.inputBoxWrap]}>
            <RecordInputBox
              title={"주행거리"}
              state={mileage}
              category={"mileage"}
              unit={"km"}
              onChange={onChange}
            />
            <RecordInputBox
              title={"영업거리"}
              state={businessDistance}
              category={"businessDistance"}
              unit={"km"}
              onChange={onChange}
            />
          </View>

          {/* 통행료 */}
          <View style={[common.flex.rowCenter, record.inputWrap.inputBoxWrap]}>
            <RecordInputBox
              title={"통행료"}
              state={toll}
              category={"toll"}
              onChange={onChange}
            />

            <View style={{ flex: 1, padding: 8 }}></View>
          </View>
        </View>

        {/* 운행정보 */}
        <View style={record.calculateWrap.container}>
          <Text style={record.common.titleText}>운행정보</Text>

          <View>
            {/* 영업금액 계산 */}
            <View
              style={[
                common.flex.rowCenter,
                record.calculateWrap.calculateBoxWrap,
              ]}
            >
              {/* 카드 */}
              <RecordBox title={"카드"} state={card} />

              <View style={record.calculateWrap.mathOperatorWrap}>
                <SvgXml xml={svg.plus} width={10} fill="#333" />
              </View>

              {/* 현금 */}
              <RecordBox title={"현금"} state={cash} />

              <View style={record.calculateWrap.mathOperatorWrap}>
                <SvgXml xml={svg.equals} />
              </View>

              {/* 영업금액 */}
              <RecordBox
                title={"영업금액"}
                state={operatingAmount}
                option={"orange"}
              />
            </View>

            {/* LPG 충전 금액 계산 */}
            <View
              style={[
                common.flex.rowCenter,
                record.calculateWrap.calculateBoxWrap,
              ]}
            >
              {/* LPG 주입량 */}
              <RecordBox
                title={"LPG 주입량"}
                state={lpgInjectionVolume}
                unit={"L"}
              />

              <View style={record.calculateWrap.mathOperatorWrap}>
                <SvgXml xml={svg.multiplication} />
              </View>

              {/* LPG 단가 */}
              <RecordBox title={"LPG 단가"} state={lpgUnitPrice} />

              <View style={record.calculateWrap.mathOperatorWrap}>
                <SvgXml xml={svg.equals} />
              </View>

              {/* LPG 충전 금액 */}
              <RecordBox
                title={"LPG 충전 금액"}
                state={lpgChargeAmount}
                option={"orange"}
              />
            </View>

            {/* 연비 계산 */}
            <View
              style={[
                common.flex.rowCenter,
                record.calculateWrap.calculateBoxWrap,
              ]}
            >
              {/* 주행거리 */}
              <RecordBox title={"주행거리"} state={mileage} unit={"km"} />

              <View style={record.calculateWrap.mathOperatorWrap}>
                <SvgXml xml={svg.division} />
              </View>

              {/* LPG 주입량 */}
              <RecordBox title={"LPG 주입량"} state={mileage} unit={"L"} />

              <View style={record.calculateWrap.mathOperatorWrap}>
                <SvgXml xml={svg.equals} />
              </View>

              {/* 연비 */}
              <RecordBox
                title={"연비"}
                state={fuelEfficiency}
                unit={"km/L"}
                option={"orange"}
              />
            </View>

            {/* LPG 사용량 계산 */}
            <View
              style={[
                common.flex.rowCenter,
                record.calculateWrap.calculateBoxWrap,
              ]}
            >
              {/* 주행거리 */}
              <RecordBox title={"주행거리"} state={mileage} unit={"km"} />

              <View style={record.calculateWrap.mathOperatorWrap}>
                <SvgXml xml={svg.division} />
              </View>

              {/* 연비 */}
              <RecordBox title={"연비"} state={fuelEfficiency} unit={"km/L"} />

              <View style={record.calculateWrap.mathOperatorWrap}>
                <SvgXml xml={svg.equals} />
              </View>

              {/* LPG 사용량 */}
              <RecordBox
                title={"LPG 사용량"}
                state={lpgUsage}
                unit={"L"}
                option={"orange"}
              />
            </View>
          </View>
        </View>
      </ScrollView>

      {/* 취소/저장 */}
      <View
        style={[
          record.buttons.container,
          common.flex.rowCenter,
          common.button.buttonsContainer,
        ]}
      >
        <BasicsButton text={"취소"} option={"cancel"} />
        <BasicsButton text={"확인"} />
      </View>
    </SafeAreaView>
  );
};
export default RecordScreen;
