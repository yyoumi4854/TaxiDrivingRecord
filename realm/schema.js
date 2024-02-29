// Realm 데이터베이스 관련 서비스
// Realm studio가 있음
import Realm from "realm";

// 지정할 데이터의 스키마를 정의
const RecordSchema = {
  name: "Record",
  properties: {
    date: "string", // 날짜는 문자열로 저장할 수 있습니다.
    // 기본값을 지정할 수 있습니다.
    card: { type: "int", default: 0 }, // 카드
    cash: { type: "int", default: 0 }, // 현금
    lpgInjectionVolume: { type: "int", default: 0 }, // LPG 주입량
    lpgUnitPrice: { type: "int", default: 0 }, // LPG 단가
    mileage: { type: "int", default: 0 }, // 주행거리
    businessDistance: { type: "int", default: 0 }, // 영업거리
    toll: { type: "int", default: 0 }, // 통행료
    operatingAmount: { type: "int", default: 0 }, // 영업금액
    lpgChargeAmount: { type: "int", default: 0 }, // LPG 충전 금액
    fuelEfficiency: { type: "int", default: 0 }, // 연비
    lpgUsage: { type: "int", default: 0 }, // LPG 사용량
  },
  primaryKey: "date",
};

const realm = new Realm({ schema: [RecordSchema] });

// realm open
export const openRealm = () => {
  return Realm.open({ schema: [RecordSchema] }).then((openRealm) => {
    realm = openRealm;
    return realm;
  });
};

// realm close
export const closeRealm = () => {
  if (realm) {
    realm.close();
  }
};

// realm close

// Create(생성)
export const createRecord = (record) => {
  realm.write(() => {
    realm.create("Record", record);
  });
};

// Read (읽기)
export const getAllRecords = () => {
  return realm.objects("Record");
};

// Update (수정)
export const updateRecord = (date, newData) => {
  const recordToUpdate = realm.objectForPrimaryKey("Record", date);
  if (recordToUpdate) {
    realm.write(() => {
      Object.keys(newData).forEach((key) => {
        recordToUpdate[key] = newData[key];
      });
    });
  }
};

// Delete (삭제)
export const deleteRecord = (date) => {
  const recordToDelete = realm.objectForPrimaryKey("Record", date);
  if (recordToDelete) {
    realm.write(() => {
      realm.delete(recordToDelete);
    });
  }
};
