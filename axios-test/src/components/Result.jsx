"use client";

import {
  useNameState,
  useJobState,
  useMailState,
  useContactState,
} from "stores";
import Image from "next/image";

const Result = ({ goNext, faces, imgUrl }) => {
  const { name } = useNameState();
  const { job } = useJobState();
  const { mail } = useMailState();
  const { contact } = useContactState();

  return (
    <div>
      <div className="w-custom h-custom bg-white text-zinc-500 flex justify-between pr-10">
        <div className="flex flex-col text-black pt-10 pl-8">
          <span className="text-4xl	font-semibold">
            {name.split("").join(" ")}
          </span>
          <span className="text-xl">{contact}</span>
          <div className="mt-20 flex flex-col font-semibol">
            <span>{job}</span>
            <span>{mail}</span>
          </div>
        </div>
        <div className="flex flex-col text-black pt-10 pl-8">
          {faces && (
            <>
              <div>
                <span>닮은 유명인 : {faces[0].celebrity.value}</span>
              </div>
              <span>
                닮음도 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :&nbsp;
                {Math.floor(faces[0].celebrity.confidence * 100)}%
              </span>
            </>
          )}
          <div className="w-32 h-40 relative overflow-hidden rounded-lg	">
            <Image fill alt="" src={imgUrl} className="object-cover" />
          </div>
        </div>
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
