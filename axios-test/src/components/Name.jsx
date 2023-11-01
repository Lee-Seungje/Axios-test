"use client";

import { useNameState } from "stores";

const Name = ({ goNext, goPrev }) => {
  const { name, setName } = useNameState();

  return (
    <div>
      <input
        className=""
        value={name}
        placeholder="이름을 입력해주세요."
        onChange={(e) => setName(e.target.value)}
      />
      <button
        className="bg-blue-500 w-60 h-20 rounded-lg text-xl"
        onClick={goPrev}
      >
        이전
      </button>
      <button
        className="bg-blue-500 w-60 h-20 rounded-lg text-xl"
        onClick={goNext}
      >
        다음
      </button>
    </div>
  );
};

export default Name;
