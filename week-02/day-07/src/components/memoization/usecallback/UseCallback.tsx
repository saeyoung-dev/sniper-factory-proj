import { useCallback, useMemo, useState } from "react";
import UseCallbackDisplay from "./UseCallbackDisplay";
import UsecallbackAction from "./UseCallbackAction";

const fn = new Set();
const UseCallback = () => {
  // useMemo 값을 메모이제이션 할 때 사용
  // useMemo( () => { return "" } , [] );
  const fruits = useMemo(() => ["apple", "banana", "orange"], []);
  const [count, setCount] = useState({ count: 0 });

  const increment = useCallback(() => {
    // { count : 0 }
    setCount((count) => ({ count: count.count + 1 }));
  }, []);

  const decrement = useCallback(() => {
    setCount((count) => ({ count: count.count - 1 }));
  }, []);

  const [count2, setCount2] = useState({ count: 0 });

  fn.add(count);
  fn.add(count2);

  console.log(fn);
  return (
    <>
      <UseCallbackDisplay
        count={count}
        setCount={setCount}
        title="count rendering"
        fruits={fruits}
      />
      <UseCallbackDisplay
        count={count2}
        setCount={setCount2}
        title="count2 rendering"
        fruits={fruits}
      />
      <UsecallbackAction increment={increment} decrement={decrement} />
    </>
  );
};
export default UseCallback;
