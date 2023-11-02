"use client";

import {
  useImageUrlState,
  useNameState,
  useJobState,
  useGenderState,
  useAgeState,
} from "stores";

const Result = ({ goNext, faces, imgUrl }) => {
  const { name } = useNameState();
  const { job } = useJobState();
  const { gender } = useGenderState();
  const { age } = useAgeState();
  console.log(imgUrl);

  return (
    <div>
      <h1>결과가 나옵니다.</h1>
      <h2>이름 : {name}</h2>
      <h2>성별 : {gender}</h2>
      <h2>나이 : {age}</h2>
      <h2>직무 : {job}</h2>
      <img src={imgUrl} />
      {faces && (
        <>
          <h2>닮은 유명인 : {faces[0].celebrity.value}</h2>
          <h2>닮음도 : {faces[0].celebrity.confidence * 100}%</h2>
        </>
      )}
      <button onClick={goNext}>처음으로</button>
    </div>
  );
};

export default Result;
