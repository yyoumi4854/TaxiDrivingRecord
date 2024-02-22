// 영업금액 = 카드 + 현금
export const operatingAmount = (card, cash) => {
  return parseInt(card) + parseInt(cash);
  //   return card + cash;
};

// LPG 충전 금액 = LPG 주입량 * LPG 단가
export const lpgChargeAmount = (lpgInjectionVolume, lpgUnitPrice) => {
  return parseInt(lpgInjectionVolume) * parseInt(lpgUnitPrice);
};

// 연비 = 주행거리 / LPG 주입량
export const fuelEfficiency = (mileage, lpgInjectionVolume) => {
  return parseInt(mileage) / parseInt(lpgInjectionVolume);
};

// LPG 사용량 = 주행거리 / 연비
export const lpgUsage = (mileage, fuelEfficiency) => {
  return parseInt(mileage) / parseInt(fuelEfficiency);
};
