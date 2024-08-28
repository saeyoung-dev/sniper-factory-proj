import { useState, useTransition } from "react";

const UseTransition = () => {
  const [input, setInput] = useState("");
  const [dummy, setDummy] = useState<number[]>([]);
  const [pending, startTranstion] = useTransition();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);

    startTranstion(() => {
      // 의도적인 시스템 부하를 주기 위한 코드
      // 비동기 처럼 -> 제가 여러분
      const i: number[] = [];
      for (let j = 0; j < 20000; j++) {
        i.push(j);
      }
      setDummy((dummy) => [...dummy, ...i]);
    });
  };

  return (
    <>
      <h1>UseTranstion</h1>
      <input type="text" value={input} onChange={onChange} />
      {!pending ? (
        <ul>
          {dummy.map((d) => (
            <li key={d}>{d}</li>
          ))}
        </ul>
      ) : (
        <h1>Loading..</h1>
      )}
    </>
  );
};
export default UseTransition;
