"use client";

import { useEffect } from "react";

const Result = ({ goNext, faces, faceCount }) => {
  useEffect(() => {
    console.log(faces, faceCount);
  }, []);

  return (
    <div>
      <h1>결과가 나옵니다.</h1>
      <button onClick={goNext}>처음으로</button>
      <ul>
        {faces.map(({ celebrity }) => (
          <li>
            <h2>닮은 유명인 : {celebrity.value}</h2>
            <h2>닮음도 : {celebrity.confidence * 100}%</h2>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Result;
