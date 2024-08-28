import { useDeferredValue, useState } from "react";

const UseDeferredValue = () => {
  const [input, setInput] = useState("");
  const [dummy, setDummy] = useState<number[]>([]);
  const deferredValue = useDeferredValue(dummy);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);

    const i: number[] = [];
    for (let j = 0; j < 20000; j++) {
      i.push(j);
    }
    setDummy((dummy) => [...dummy, ...i]);
  };

  return (
    <>
      <h1>UseDeferredValue</h1>
      <input type="text" value={input} onChange={onChange} />
      <ul>
        {deferredValue.map((d) => (
          <li key={d}>{d}</li>
        ))}
      </ul>
    </>
  );
};
export default UseDeferredValue;
