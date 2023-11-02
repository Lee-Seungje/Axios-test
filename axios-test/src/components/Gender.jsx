"use client";

import { useGenderState } from "stores";

const Gender = ({ goNext }) => {
  const { gender, setGender } = useGenderState();

  return (
    <div className="flex flex-col	items-center relative">
      <input
        className="ease-in-out duration-200 focus:border-b border-blue-600 w-custom h-20 bg-neutral-900 text-4xl outline-none mt-24 "
        value={gender}
        placeholder="성별을 입력해주세요."
        onChange={(e) => setGender(e.target.value)}
      />
      <button
        className="ease-in-out duration-200	hover:bg-blue-600 bg-blue-500 w-custom h-20 text-xl absolute bottom-12"
        onClick={goNext}
      >
        다음
      </button>
    </div>
  );
};

export default Gender;
