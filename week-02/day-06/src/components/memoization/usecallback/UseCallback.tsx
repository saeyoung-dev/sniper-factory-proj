import { useCallback, useState } from 'react';
import UseCallbackAction from './UseCallbackAction';
import UseCallbackDisplay from './UseCallbackDisplay';
import UseCallbackTest from './UseCallbackTest';

const fn = new Set();
function UseCallback() {
  const [count, setCount] = useState({ count: 0 });

  const increment = useCallback(() => {
    setCount((count) => ({
      count: count.count + 1,
    }));
  }, []);

  const decrement = useCallback(() => {
    setCount((count) => ({
      count: count.count + 1,
    }));
  }, []);

  const [count2] = useState({ count: 0 });

  fn.add(increment);
  fn.add(decrement);
  console.log(fn);
  return (
    <div>
      <UseCallbackDisplay count={count} title='count rendering' />
      <UseCallbackDisplay count={count2} title='count2 rendering' />
      <UseCallbackAction increment={increment} decrement={decrement} />
      <UseCallbackTest />
    </div>
  );
}

export default UseCallback;
