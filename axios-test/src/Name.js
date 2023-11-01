const Name = ({ goNext }) => {
  return (
    <div>
      <input placeholder="이름을 입력해주세요." />
      <button onClick={goNext}>다음</button>
    </div>
  );
};

export default Name;
