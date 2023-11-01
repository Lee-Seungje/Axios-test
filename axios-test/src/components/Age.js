"use client";

import { useGenderState } from "stores";

const Age = ({ goNext }) => {
  const { gender, setGender } = useGenderState();

  return (
    <div>
      <input
        value={gender}
        placeholder="성별을 입력해주세요."
        onChange={(e) => setGender(e.target.value)}
      />
      <button onClick={goNext}>다음</button>
    </div>
  );
};

export default Age;
