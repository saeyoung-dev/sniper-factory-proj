import React from 'react';

function UseCallbackAction({
  increment,
  decrement,
}: {
  increment: () => void;
  decrement: () => void;
}) {
  console.log('UseCallbackAction rendering');
  return (
    <>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </>
  );
}

export default React.memo(UseCallbackAction);
