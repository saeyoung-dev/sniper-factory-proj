import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setCount((prev) => prev - 1);
  };

  const handleReset = () => {
    setCount(0);
  };
  return (
    <>
      <h1 className='text-lg my-4 mx-2'>
        Counter <span>{count}</span>
      </h1>
      <div className='flex gap-2'>
        <button className='p-2 border rounded' onClick={handleDecrement}>
          Decrease
        </button>
        <button className='p-2 border rounded' onClick={handleReset}>
          Reset
        </button>
        <button className='p-2 border rounded' onClick={handleIncrement}>
          Increse
        </button>
      </div>
    </>
  );
};
export default Counter;

// 불변성
// 불변성 -> 값이 변하지 않는 특징
// 불변성을 지켜서 값을 변경해주어야함
// 리액트에서 값을 바꿀 때, 불변성을 지켜야 함
// 리액트에서 값을 바꿀 때, 새로운 값을 만들어서 변경.
