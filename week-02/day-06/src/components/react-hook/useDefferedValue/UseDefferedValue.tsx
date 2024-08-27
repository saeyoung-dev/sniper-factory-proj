import { useDeferredValue, useState } from 'react';

const UserDefferedValue = () => {
  const [input, setInput] = useState('');
  const [dummy, setDummy] = useState<number[]>([]);
  const deferredVlaue = useDeferredValue(dummy);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);

    // 의도적인 시스템 부하
    const i: number[] = [];
    for (let j = 0; j < 20000; j++) {
      i.push(j);
    }
    setDummy((d) => [...d, ...i]);
  };

  return (
    <>
      <h1>hello</h1>
      <input type='text' value={input} onChange={onChange} />
      <ul>
        {deferredVlaue.map((d) => (
          <li key={d}>{d}</li>
        ))}
      </ul>
    </>
  );
};

export default UserDefferedValue;
