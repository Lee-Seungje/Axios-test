"use client";

import { useContactState } from "stores";

const Name = ({ goNext }) => {
  const { contact, setContact } = useContactState();

  return (
    <div>
      <input
        value={contact}
        placeholder="연락처를 입력해주세요."
        onChange={(e) => setContact(e.target.value)}
      />
      <button onClick={goNext}>다음</button>
    </div>
  );
};

export default Name;
