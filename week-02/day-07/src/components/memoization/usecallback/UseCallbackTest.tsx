import { useState } from "react";

const UseCallbackTest = () => {
  console.log("test rendering");
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>UseCallbackTest Component</h1>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>증가</button>
    </>
  );
};
export default UseCallbackTest;
