"use client";

import Image from "next/image";

const Intro = ({ goNext }) => {
  return (
    <div className="flex flex-col items-center relative h-screen">
      <span className="text-xl font-thin mt-32">스파이크 명함제작</span>
      <span className="text-3xl font-semibold mt-2">꼭 필요한 정보만,</span>
      <span className="text-3xl font-semibold mt-1">효과적으로 어필하세요</span>
      <div className="w-96 h-48 relative mt-16">
        <Image fill src="/NameTag.png" alt="" />
      </div>
      <button
        className="ease-in-out duration-200	mb-12 hover:bg-blue-600 bg-blue-500 w-11/12 rounded-xl h-14 text-xl absolute bottom-2"
        onClick={goNext}
      >
        다음
      </button>
    </div>
  );
};

export default Intro;
