import { useEffect, useState } from 'react';

function UseEffectCount() {
  // 생명 주기를 체크할 때 useEffect 사용
  // 생성, 삭제
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log('UseEffectCount Component Created');
    return () => {
      console.log('UseEffectCount Component Destroyed');
    };
  }, []);

  useEffect(() => {
    console.log('UseEffectCount Componenet Updated!');
    console.log('count: ', count);
  }, [count]);
  return (
    <>
      <h1>UseEffectCount Component : {count}</h1>
      <button onClick={() => setCount((count) => count + 1)}>Increment</button>
    </>
  );
}

export default UseEffectCount;
