"use client";

import { useImageUrlState, useNameState } from "stores";

const Result = ({ goNext, faces }) => {
  const { imageUrl } = useImageUrlState();
  const { name } = useNameState();

  return (
    <div>
      <h1>결과가 나옵니다.</h1>
      <h2>이름 : {name}</h2>
      <img src={imageUrl} />
      <ul>
        {faces?.map(({ celebrity }, i) => (
          <li key={i}>
            <h2>닮은 유명인 : {celebrity.value}</h2>
            <h2>닮음도 : {celebrity.confidence * 100}%</h2>
          </li>
        ))}
      </ul>
      <button onClick={goNext}>처음으로</button>
    </div>
  );
};

export default Result;
