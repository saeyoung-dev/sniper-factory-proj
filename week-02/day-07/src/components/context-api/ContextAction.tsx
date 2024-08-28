import React, { useContext } from "react";
import { CounterContextFn } from "../../context/CounterProvider";

const ContextAction = () => {
  console.log("action rendering");
  const { increment, decrement } = useContext(CounterContextFn)!;
  return (
    <>
      <button onClick={increment}>증가</button>
      <button onClick={decrement}>감소</button>
    </>
  );
};
export default React.memo(ContextAction);
