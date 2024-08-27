import React, { useContext } from 'react';
import { CounterContextFn } from '../../context/CounterProvider';

function ContextAction() {
  console.log('Action Rendering');
  const { increment, decrement } = useContext(CounterContextFn)!;
  return (
    <div>
      <button onClick={increment} type='button'>
        증가
      </button>
      <button onClick={decrement} type='button'>
        감소
      </button>
    </div>
  );
}
export default React.memo(ContextAction);
