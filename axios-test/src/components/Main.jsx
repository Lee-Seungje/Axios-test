"use client";

import { Result, Name, CameraCapture, Gender, Age, Job } from "components";
import { useState } from "react";

const Main = () => {
  const [step, setStep] = useState("이름");
  const [faces, setFaces] = useState();

  return (
    <div className="w-500">
      {step === "이름" && <Name goNext={() => setStep("나이")} />}
      {step === "나이" && <Age goNext={() => setStep("성별")} />}
      {step === "성별" && <Gender goNext={() => setStep("직무")} />}
      {step === "직무" && <Job goNext={() => setStep("촬영")} />}
      {step === "촬영" && (
        <CameraCapture goNext={() => setStep("결과")} setFaces={setFaces} />
      )}
      {step === "결과" && (
        <Result faces={faces} goNext={() => setStep("이름")} />
      )}
    </div>
  );
};

export default Main;
