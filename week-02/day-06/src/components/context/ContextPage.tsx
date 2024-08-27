import ContextCount from './ContextCount';
import ContextOther from './ContextOther';
import { CounterProvider } from '../../context/CounterProvider';

const ContextPage = () => {
  return (
    <div>
      <CounterProvider>
        <ContextCount />
      </CounterProvider>

      <ContextOther />
    </div>
  );
};
export default ContextPage;
