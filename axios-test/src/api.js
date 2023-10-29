import axios from "axios";

const ApiTest = () => {
  const {
    data: { mealServiceDietInfo },
  } = axios.get(
    `https://open.neis.go.kr/hub/mealServiceDietInfo?KEY=${process.env.REACT_APP_TOKEN}&Type=json&pIndex=1&pSize=1&ATPT_OFCDC_SC_CODE=F10&SD_SCHUL_CODE=7380292&MLSV_YMD-2023-10-30`
  );

  console.log(mealServiceDietInfo);
  return <div></div>;
};

export default ApiTest;
