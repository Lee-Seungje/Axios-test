import useFunnel from "@toss/use-funnel";

import CameraCapture from "./camera";
import Name from "./Name";
import Result from "./Result";

const Main = () => {
  const [Funnel, setStep] = useFunnel(["이름", "촬영", "결과"]);

  return (
    <Funnel>
      <Funnel.Step name="이름">
        <CameraCapture goNext={() => setStep("촬영")} />
      </Funnel.Step>
      <Funnel.Step name="촬영">
        <Name goNext={setStep("결과")} />
      </Funnel.Step>
      <Funnel.Step name="결과">
        <Result goNext={setStep("이름")} />
      </Funnel.Step>
    </Funnel>
  );
};

export default Main;
