// 1. 컨텍스트 공급자를 생성한다 -> createContext() 함수 사용
// 2. 공급자 범위를 지정한다 -> 생성한 공급자 컴포넌트의 컨텐츠로 공급할 다른 컴포넌트를 감싼다
// 3. 공급할 데이터를 value 속성으로 할당
// 4. 공급한 데이터를 useContext(공급자 컴포넌트 객체)로 받아서 사용

import { createContext, useState } from 'react';
import ContextCount from './ContextCount';
import ContextOther from './ContextOther';

type CounterContextType = {
  count: number;
  decrement: () => void;
  increment: () => void;
};
export const CounterContext = createContext<CounterContextType | null>(null);

const ContextPage = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);

  return (
    <div>
      <CounterContext.Provider value={{ count, decrement, increment }}>
        <ContextCount />
      </CounterContext.Provider>
      <ContextOther />
    </div>
  );
};
export default ContextPage;
