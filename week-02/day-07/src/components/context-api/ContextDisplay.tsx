import { useContext } from "react";
import { CounterContext } from "../../context/CounterProvider";

const ContextDisplay = () => {
  console.log("display rendering");
  const { count } = useContext(CounterContext)!;
  return (
    <>
      <h1>Count: {count} </h1>
    </>
  );
};
export default ContextDisplay;
