import { useContext } from 'react';
import { CounterContext } from './ContextPage';

const ContextDisplay = () => {
  const { count } = useContext(CounterContext)!;
  return <div>Count: {count}</div>;
};
export default ContextDisplay;
