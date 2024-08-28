import React from "react";

const UseCallbackDisplay = ({
  count,
  title,
  setCount,
  fruits,
}: {
  count: { count: number };
  title: string;
  setCount: React.Dispatch<React.SetStateAction<{ count: number }>>;
  fruits: string[];
}) => {
  console.log(title);
  return (
    <>
      <h1>Count: {count.count} </h1>
    </>
  );
};
export default React.memo(UseCallbackDisplay);
