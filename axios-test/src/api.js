import axios from "axios";

const getMeal = async () => {
  const { data } = await axios.get(
    `https://open.neis.go.kr/hub/mealServiceDietInfo?KEY=${process.env.REACT_APP_TOKEN}&Type=json&ATPT_OFCDC_SC_CODE=F10&SD_SCHUL_CODE=7380292&MLSV_YMD=20231030`
  );
  return data.mealServiceDietInfo[1].row[0];
};

const ApiTest = () => {
  const data = getMeals();

  console.log(data);
  return <div></div>;
};

export default ApiTest;
