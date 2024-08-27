import { useContext } from 'react';
import { CounterContext } from './ContextPage';

function ContextAction() {
  const { increment, decrement } = useContext(CounterContext)!;
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
export default ContextAction;
