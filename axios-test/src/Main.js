import CameraCapture from "./camera";
import Name from "./Name";
import Result from "./Result";
import { useState } from "react";

const Main = () => {
  const [step, setStep] = useState("이름");

  return (
    <div>
      {step === "이름" && <Name goNext={() => setStep("촬영")} />}
      {step === "촬영" && <CameraCapture goNext={() => setStep("결과")} />}
      {step === "결과" && <Result goNext={() => setStep("이름")} />}
    </div>
  );
};

export default Main;
