"use client";

import { useNameState } from "stores";

const Name = ({ goNext }) => {
  const { name, setName } = useNameState();

  return (
    <div>
      <input
        className=""
        value={name}
        placeholder="이름을 입력해주세요."
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={goNext}>다음</button>
    </div>
  );
};

export default Name;
