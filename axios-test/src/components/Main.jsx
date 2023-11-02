"use client";

import {
  Result,
  Name,
  CameraCapture,
  Gender,
  Age,
  Job,
  Intro,
} from "components";
import { useState } from "react";

const Main = () => {
  const [step, setStep] = useState("인트로");
  const [faces, setFaces] = useState();

  return (
    <div className="w-custom flex justify-center">
      {step === "인트로" && <Intro goNext={() => setStep("이름")} />}
      {step === "이름" && <Name goNext={() => setStep("나이")} />}
      {step === "나이" && (
        <Age goNext={() => setStep("성별")} goPrev={() => setStep("이름")} />
      )}
      {step === "성별" && (
        <Gender goNext={() => setStep("직무")} goPrev={() => setStep("나이")} />
      )}
      {step === "직무" && (
        <Job goNext={() => setStep("촬영")} goPrev={() => setStep("성별")} />
      )}
      {step === "촬영" && (
        <CameraCapture
          goNext={() => setStep("결과")}
          goPrev={() => setStep("직무")}
          setFaces={setFaces}
        />
      )}
      {step === "결과" && (
        <Result
          faces={faces}
          goNext={() => setStep("이름")}
          goPrev={() => setStep("촬영")}
        />
      )}
    </div>
  );
};

export default Main;
