"use client";

const Result = ({ goNext }) => {
  return (
    <div>
      <h1>결과가 나옵니다.</h1>
      <button onClick={goNext}>처음으로</button>
    </div>
  );
};

export default Result;
