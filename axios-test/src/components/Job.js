"use client";

import { useJobState } from "stores";

const Gender = ({ goNext }) => {
  const { job, setJob } = useJobState();

  return (
    <div>
      <input
        value={job}
        placeholder="직무를 입력해주세요."
        onChange={(e) => setJob(e.target.value)}
      />
      <button onClick={goNext}>다음</button>
    </div>
  );
};

export default Gender;
