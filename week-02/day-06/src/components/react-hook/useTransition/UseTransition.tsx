import { useState, useTransition } from 'react';

const UseTransition = () => {
  const [input, setInput] = useState('');
  const [dummy, setDummy] = useState<number[]>([]);
  const [pending, startTransition] = useTransition();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);

    startTransition(() => {
      // 의도적인 시스템 부하
      const i: number[] = [];
      for (let j = 0; j < 20000; j++) {
        i.push(j);
      }
      setDummy((d) => [...d, ...i]);
    });
  };

  return (
    <>
      <h1>UseTranstion</h1>
      <input type='text' value={input} onChange={onChange} />
      {!pending ? (
        <ul>
          {dummy.map((d) => (
            <li key={d}>{d}</li>
          ))}
        </ul>
      ) : (
        <h1>Loading</h1>
      )}
    </>
  );
};
export default UseTransition;
