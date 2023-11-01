"use client";

import { useAgeState } from "stores";

const Age = ({ goNext }) => {
  const { age, setAge } = useAgeState();

  return (
    <div>
      <input
        value={age}
        placeholder="나이를 입력해주세요."
        onChange={(e) => setAge(e.target.value)}
      />
      <button onClick={goNext}>다음</button>
    </div>
  );
};

export default Age;
