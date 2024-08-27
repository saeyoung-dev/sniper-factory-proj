import { useContext } from 'react';
import { CounterContext } from '../../context/CounterProvider';

const ContextDisplay = () => {
  console.log('Display Rendering');
  const { count } = useContext(CounterContext)!;
  return <div>Count: {count}</div>;
};
export default ContextDisplay;
