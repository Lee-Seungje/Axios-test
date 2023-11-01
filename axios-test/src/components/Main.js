"use client";

import { Result, Name, CameraCapture } from "components";
import { useState } from "react";

const Main = () => {
  const [step, setStep] = useState("이름");
  const [faces, setFaces] = useState();

  return (
    <div>
      {step === "이름" && <Name goNext={() => setStep("촬영")} />}
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
