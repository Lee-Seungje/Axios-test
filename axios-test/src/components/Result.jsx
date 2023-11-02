"use client";

import {
  useImageUrlState,
  useNameState,
  useJobState,
  useGenderState,
  useAgeState,
} from "stores";
import Image from "next/image";

const Result = ({ goNext, faces, imgUrl }) => {
  const { name } = useNameState();
  const { job } = useJobState();
  const { gender } = useGenderState();
  const { age } = useAgeState();

  return (
    <div>
      <div className="w-custom h-custom bg-white text-zinc-500 flex">
        <div>
          <span>이름 : {name}</span>
          <span>직무 : {job}</span>
        </div>
        <span>성별 : {gender}</span>
        <span>나이 : {age}</span>
        <div className="w-32 h-40 relative overflow-hidden rounded-lg	">
          <Image fill alt="" src={imgUrl} className="object-cover" />
        </div>
        {faces && (
          <>
            <span>닮은 유명인 : {faces[0].celebrity.value}</span>
            <span>닮음도 : {faces[0].celebrity.confidence * 100}%</span>
          </>
        )}
      </div>
      <div className="absolute bottom-2 flex w-custom justify-between	">
        <button className="ease-in-out duration-200	hover:bg-blue-600 mb-8 bg-blue-500 w-60 rounded-xl h-14 text-xl ">
          다운로드
        </button>
        <button
          className="ease-in-out duration-200	hover:bg-blue-600 mb-8 bg-blue-500 w-60 rounded-xl h-14 text-xl "
          onClick={() => {
            goNext();
          }}
        >
          다음
        </button>
      </div>
    </div>
  );
};

export default Result;
