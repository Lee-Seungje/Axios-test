"use client";

import { useNameState } from "stores";
import Image from "next/image";

const Name = ({ goNext }) => {
  const { name, setName } = useNameState();

  return (
    <div className="flex flex-col	items-center	">
      <h1 className="text-5xl">스파이크에서 손쉽게 NameTag를 만들어요!</h1>
      <div className="w-96 h-96 relative">
        <Image fill src="/MainImage.png" alt="" />
      </div>
      <input
        className="w-custom h-20 bg-neutral-900 text-4xl outline-none"
        value={name}
        placeholder="이름을 입력해주세요."
        onChange={(e) => setName(e.target.value)}
      />
      <button className="bg-blue-500 w-custom h-20 text-xl" onClick={goNext}>
        다음
      </button>
    </div>
  );
};

export default Name;
