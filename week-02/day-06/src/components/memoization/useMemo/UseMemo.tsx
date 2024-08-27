import { useState, useMemo } from 'react';
import { initialItems } from '../../../utils/utils';

function UseMemo() {
  const [items] = useState(initialItems); // 3000만개의 데이터를 가진 배열
  const selectedItems = useMemo(() => items.find((item) => item.selected), []);

  const [count, setCount] = useState(0);

  return (
    <>
      <div>UseMemo</div>
      <pre>{JSON.stringify(selectedItems, null, 2)}</pre>
      <h1>count: {count}</h1>
      <button onClick={() => setCount((count) => count + 1)}>click</button>
    </>
  );
}
export default UseMemo;
