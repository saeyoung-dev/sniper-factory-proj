import { useState } from 'react';

function UseCallbackTest() {
  const [count, setCount] = useState(0);
  console.log('UseCallback Test');
  return (
    <div>
      <h1>UseCallback Test</h1>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>증가</button>
    </div>
  );
}

export default UseCallbackTest;
