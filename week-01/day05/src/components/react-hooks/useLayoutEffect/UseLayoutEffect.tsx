import { useLayoutEffect, useState } from 'react';

const UseLayoutEffect = () => {
  const [count, setCount] = useState(0);
  const now = performance.now();
  while (performance.now() - now < 200) {
    console.log('delayed');
  }

  useLayoutEffect(() => {
    if (count === 10) setCount(0);
    console.log('useLayoutEffect');
  }, [count]);

  return (
    <>
      <h1>hello : {count}</h1>
      <button onClick={() => setCount(10)}>click</button>
    </>
  );
};

export default UseLayoutEffect;
