// 1. 컨텍스트 공급자 컴포넌트 객체를 생성한다 -> createContext() 함수를 사용한다.
// 2. 공급자 범위를 지정한다 -> 생성한 공급자 컴포넌트 객체의 콘텐츠로 데이터를 공급할 다른 컴포넌트를 감싼다.
// 3. 공급할 데이터를 value 속성으로 설정한다.
// 4. 공급한 데이터를 useContext(공급자 컴포넌트 객체); 받아서 사용한다.

import ConetxtCount from "./ConetxtCount";
import ContextOther from "./ContextOther";

const ContextPage = () => {
  return (
    <>
      <ConetxtCount />
      <ContextOther />
    </>
  );
};
export default ContextPage;
