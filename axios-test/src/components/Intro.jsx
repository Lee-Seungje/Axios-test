"use client";

import Image from "next/image";

const Intro = ({ goNext }) => {
  return (
    <div className="flex flex-col	items-center">
      <h1 className="text-5xl">스파이크에서 손쉽게 NameTag를 만들어요!</h1>
      <div className="w-96 h-48 relative">
        <Image fill src="/NameTag.png" alt="" />
      </div>
      <button
        className="bg-blue-500 w-11/12 rounded-xl h-14 text-xl"
        onClick={goNext}
      >
        다음
      </button>
    </div>
  );
};

export default Intro;
