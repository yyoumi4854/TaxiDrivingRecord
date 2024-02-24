import { useEffect, useReducer } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { SvgXml } from "react-native-svg";
import { svg } from "../assets/svg";
import * as calculate from "../utils/calculate";
import * as record from "../styles/record.styles";
import * as common from "../styles/common.styles";

function reducer(state, action) {
  return {
    ...state,
    [action.name]: parseInt(action.value),
  };
}

const RecordScreen = () => {
  const navigation = useNavigation();

  // 이전 페이지로 이동
  const goBack = () => {
    navigation.goBack();
  };

  const [state, dispatch] = useReducer(reducer, {
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

  const isNum = (text) => {
    const number = parseInt(text);
    return isNaN(number) ? 0 : number;
  };

  // 영업금액
  useEffect(() => {
    onChange("operatingAmount", calculate.operatingAmount(card, cash));
  }, [card, cash]);

  // LPG 충전 금액
  useEffect(() => {
    onChange(
      "lpgChargeAmount",
      calculate.operatingAmount(lpgInjectionVolume, lpgUnitPrice)
    );
  }, [lpgInjectionVolume, lpgUnitPrice]);

  // 연비
  useEffect(() => {
    onChange(
      "fuelEfficiency",
      calculate.operatingAmount(mileage, lpgInjectionVolume)
    );
  }, [mileage, lpgInjectionVolume]);

  // LPG 사용량
  useEffect(() => {
    onChange("lpgUsage", calculate.operatingAmount(mileage, fuelEfficiency));
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

          <Text style={record.header.dayText}>2024년 2월 20일</Text>
        </View>

        <TouchableOpacity
          //   onPress={onPress}
          style={[common.button.iconButton]}
        >
          <View style={common.flex.center}>
            <SvgXml xml={svg.calendar} fill={"#FFA800"} />
          </View>
        </TouchableOpacity>
      </View>

      {/* 운행정보 기록하기 */}
      <ScrollView style={[record.section]}>
        {/* 운행정보 기록 */}
        <View style={record.inputWrap.container}>
          <Text style={record.common.titleText}>기본 운행 정보 기록하기</Text>

          {/* 카드, 현금 */}
          <View style={[common.flex.rowCenter, record.inputWrap.inputBoxWrap]}>
            <View style={record.inputWrap.inputBox}>
              <Text style={record.inputWrap.inputBoxTitle}>카드</Text>
              <View
                style={[common.flex.rowCenter, record.inputWrap.textInputWrap]}
              >
                <TextInput
                  placeholder="0"
                  keyboardType="numeric"
                  value={card.toString()}
                  onChangeText={(text) => onChange("card", isNum(text))}
                  style={record.inputWrap.textInput}
                ></TextInput>
                <Text style={record.inputWrap.unitText}>원</Text>
              </View>
            </View>

            <View style={record.inputWrap.inputBox}>
              <Text style={record.inputWrap.inputBoxTitle}>현금</Text>
              <View
                style={[common.flex.rowCenter, record.inputWrap.textInputWrap]}
              >
                <TextInput
                  placeholder="0"
                  keyboardType="numeric"
                  value={cash.toString()}
                  onChangeText={(text) => onChange("cash", isNum(text))}
                  style={record.inputWrap.textInput}
                ></TextInput>
                <Text style={record.inputWrap.unitText}>원</Text>
              </View>
            </View>
          </View>

          {/* LPG 주입량, LPG 단가 */}
          <View style={[common.flex.rowCenter, record.inputWrap.inputBoxWrap]}>
            <View style={record.inputWrap.inputBox}>
              <Text style={record.inputWrap.inputBoxTitle}>LPG 주입량</Text>
              <View
                style={[common.flex.rowCenter, record.inputWrap.textInputWrap]}
              >
                <TextInput
                  placeholder="0"
                  keyboardType="numeric"
                  value={lpgInjectionVolume}
                  onChangeText={(text) =>
                    onChange("lpgInjectionVolume", isNum(text))
                  }
                  style={record.inputWrap.textInput}
                ></TextInput>
                <Text style={record.inputWrap.unitText}>L</Text>
              </View>
            </View>

            <View style={record.inputWrap.inputBox}>
              <Text style={record.inputWrap.inputBoxTitle}>LPG 단가</Text>
              <View
                style={[common.flex.rowCenter, record.inputWrap.textInputWrap]}
              >
                <TextInput
                  placeholder="0"
                  keyboardType="numeric"
                  value={lpgUnitPrice}
                  onChangeText={(text) => onChange("lpgUnitPrice", isNum(text))}
                  style={record.inputWrap.textInput}
                ></TextInput>
                <Text style={record.inputWrap.unitText}>원</Text>
              </View>
            </View>
          </View>

          {/* 주행거리, 영업거리 */}
          <View style={[common.flex.rowCenter, record.inputWrap.inputBoxWrap]}>
            <View style={record.inputWrap.inputBox}>
              <Text style={record.inputWrap.inputBoxTitle}>주행거리</Text>
              <View
                style={[common.flex.rowCenter, record.inputWrap.textInputWrap]}
              >
                <TextInput
                  placeholder="0"
                  keyboardType="numeric"
                  value={mileage}
                  onChangeText={(text) => onChange("mileage", isNum(text))}
                  style={record.inputWrap.textInput}
                ></TextInput>
                <Text style={record.inputWrap.unitText}>km</Text>
              </View>
            </View>

            <View style={record.inputWrap.inputBox}>
              <Text style={record.inputWrap.inputBoxTitle}>영업거리</Text>
              <View
                style={[common.flex.rowCenter, record.inputWrap.textInputWrap]}
              >
                <TextInput
                  placeholder="0"
                  keyboardType="numeric"
                  value={businessDistance}
                  onChangeText={(text) =>
                    onChange("businessDistance", isNum(text))
                  }
                  style={record.inputWrap.textInput}
                ></TextInput>
                <Text style={record.inputWrap.unitText}>km</Text>
              </View>
            </View>
          </View>

          {/* 통행료 */}
          <View style={[common.flex.rowCenter, record.inputWrap.inputBoxWrap]}>
            <View style={record.inputWrap.inputBox}>
              <Text style={record.inputWrap.inputBoxTitle}>통행료</Text>
              <View
                style={[common.flex.rowCenter, record.inputWrap.textInputWrap]}
              >
                <TextInput
                  placeholder="0"
                  keyboardType="numeric"
                  value={toll}
                  onChangeText={(text) => onChange("toll", isNum(text))}
                  style={record.inputWrap.textInput}
                ></TextInput>
                <Text style={record.inputWrap.unitText}>원</Text>
              </View>
            </View>

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
              <View
                style={[common.box.grayBox, record.calculateWrap.calculateBox]}
              >
                <Text style={record.calculateWrap.title}>카드</Text>
                <View style={record.calculateWrap.valueWrap}>
                  <Text style={common.text.blackBoldText}>{card}원</Text>
                </View>
              </View>

              <View style={record.calculateWrap.mathOperatorWrap}>
                <SvgXml xml={svg.plus} width={10} fill="#333" />
              </View>

              {/* 현금 */}
              <View
                style={[common.box.grayBox, record.calculateWrap.calculateBox]}
              >
                <Text style={record.calculateWrap.title}>현금</Text>
                <View style={record.calculateWrap.valueWrap}>
                  <Text style={common.text.blackBoldText}>{cash}원</Text>
                </View>
              </View>

              <View style={record.calculateWrap.mathOperatorWrap}>
                <SvgXml xml={svg.equals} />
              </View>

              {/* 영업금액 */}
              <View
                style={[
                  common.box.orangeBox,
                  record.calculateWrap.calculateBox,
                ]}
              >
                <Text
                  style={[record.calculateWrap.title, { color: "#FF7B00" }]}
                >
                  영업금액
                </Text>
                <View style={record.calculateWrap.valueWrap}>
                  <Text style={common.text.blackBoldText}>
                    {operatingAmount}원
                  </Text>
                </View>
              </View>
            </View>

            {/* LPG 충전 금액 계산 */}
            <View
              style={[
                common.flex.rowCenter,
                record.calculateWrap.calculateBoxWrap,
              ]}
            >
              {/* LPG 주입량 */}
              <View
                style={[common.box.grayBox, record.calculateWrap.calculateBox]}
              >
                <Text style={record.calculateWrap.title}>LPG 주입량</Text>
                <View style={record.calculateWrap.valueWrap}>
                  <Text style={common.text.blackBoldText}>
                    {lpgInjectionVolume}L
                  </Text>
                </View>
              </View>

              <View style={record.calculateWrap.mathOperatorWrap}>
                <SvgXml xml={svg.multiplication} />
              </View>

              {/* LPG 단가 */}
              <View
                style={[common.box.grayBox, record.calculateWrap.calculateBox]}
              >
                <Text style={record.calculateWrap.title}>LPG 단가</Text>
                <View style={record.calculateWrap.valueWrap}>
                  <Text style={common.text.blackBoldText}>
                    {lpgUnitPrice}원
                  </Text>
                </View>
              </View>

              <View style={record.calculateWrap.mathOperatorWrap}>
                <SvgXml xml={svg.equals} />
              </View>

              {/* LPG 충전 금액 */}
              <View
                style={[
                  common.box.orangeBox,
                  record.calculateWrap.calculateBox,
                ]}
              >
                <Text
                  style={[record.calculateWrap.title, { color: "#FF7B00" }]}
                >
                  LPG 충전 금액
                </Text>
                <View style={record.calculateWrap.valueWrap}>
                  <Text style={common.text.blackBoldText}>
                    {lpgChargeAmount}원
                  </Text>
                </View>
              </View>
            </View>

            {/* 연비 계산 */}
            <View
              style={[
                common.flex.rowCenter,
                record.calculateWrap.calculateBoxWrap,
              ]}
            >
              {/* 주행거리 */}
              <View
                style={[common.box.grayBox, record.calculateWrap.calculateBox]}
              >
                <Text style={record.calculateWrap.title}>주행거리</Text>
                <View style={record.calculateWrap.valueWrap}>
                  <Text style={common.text.blackBoldText}>{mileage}km</Text>
                </View>
              </View>

              <View style={record.calculateWrap.mathOperatorWrap}>
                <SvgXml xml={svg.division} />
              </View>

              {/* LPG 주입량 */}
              <View
                style={[common.box.grayBox, record.calculateWrap.calculateBox]}
              >
                <Text style={record.calculateWrap.title}>LPG 주입량</Text>
                <View style={record.calculateWrap.valueWrap}>
                  <Text style={common.text.blackBoldText}>
                    {lpgInjectionVolume}L
                  </Text>
                </View>
              </View>

              <View style={record.calculateWrap.mathOperatorWrap}>
                <SvgXml xml={svg.equals} />
              </View>

              {/* 연비 */}
              <View
                style={[
                  common.box.orangeBox,
                  record.calculateWrap.calculateBox,
                ]}
              >
                <Text
                  style={[record.calculateWrap.title, { color: "#FF7B00" }]}
                >
                  연비
                </Text>
                <View style={record.calculateWrap.valueWrap}>
                  <Text style={common.text.blackBoldText}>
                    {fuelEfficiency}km/L
                  </Text>
                </View>
              </View>
            </View>

            {/* LPG 사용량 계산 */}
            <View
              style={[
                common.flex.rowCenter,
                record.calculateWrap.calculateBoxWrap,
              ]}
            >
              {/* 주행거리 */}
              <View
                style={[common.box.grayBox, record.calculateWrap.calculateBox]}
              >
                <Text style={record.calculateWrap.title}>주행거리</Text>
                <View style={record.calculateWrap.valueWrap}>
                  <Text style={common.text.blackBoldText}>{mileage}km</Text>
                </View>
              </View>

              <View style={record.calculateWrap.mathOperatorWrap}>
                <SvgXml xml={svg.division} />
              </View>

              {/* 연비 */}
              <View
                style={[common.box.grayBox, record.calculateWrap.calculateBox]}
              >
                <Text style={record.calculateWrap.title}>연비</Text>
                <View style={record.calculateWrap.valueWrap}>
                  <Text style={common.text.blackBoldText}>
                    {fuelEfficiency}L
                  </Text>
                </View>
              </View>

              <View style={record.calculateWrap.mathOperatorWrap}>
                <SvgXml xml={svg.equals} />
              </View>

              {/* LPG 사용량 */}
              <View
                style={[
                  common.box.orangeBox,
                  record.calculateWrap.calculateBox,
                ]}
              >
                <Text
                  style={[record.calculateWrap.title, { color: "#FF7B00" }]}
                >
                  LPG 사용량
                </Text>
                <View style={record.calculateWrap.valueWrap}>
                  <Text style={common.text.blackBoldText}>{lpgUsage}L</Text>
                </View>
              </View>
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
        <TouchableOpacity
          style={[
            common.flex.center,
            common.button.button,
            common.button.cancel,
          ]}
        >
          <Text style={common.button.cancelText}>취소</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            common.flex.center,
            common.button.button,
            common.button.confirm,
          ]}
        >
          <Text style={common.button.confirmText}>저장</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default RecordScreen;
