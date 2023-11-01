"use client";

import { Result, Name, CameraCapture } from "components";
import { useState } from "react";

const Main = () => {
  const [step, setStep] = useState("이름");
  const [faceCount, setFaceCount] = useState(0);
  const [faces, setFaces] = useState();

  return (
    <div>
      {step === "이름" && <Name goNext={() => setStep("촬영")} />}
      {step === "촬영" && (
        <CameraCapture
          goNext={() => setStep("결과")}
          setFaceCount={setFaceCount}
          setFaces={setFaces}
        />
      )}
      {step === "결과" && <Result goNext={() => setStep("이름")} />}
    </div>
  );
};

export default Main;
