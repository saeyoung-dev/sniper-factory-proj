import ContextPage from "./components/context-api/ContextPage";
import UseCallback from "./components/memoization/usecallback/UseCallback";
import UseMemo from "./components/memoization/usememo/UseMemo";
import UseDeferredValue from "./components/react-hook/usedefferedvalue/UseDeferredValue";
import UseTransition from "./components/react-hook/usetransition/UseTransition";
import Todo from "./components/todo-context/Todo";
import { CounterProvider } from "./context/CounterProvider";

export default function App() {
  return (
    <>
      <Todo />
      {/* <UseTransition /> */}
      {/* <UseDeferredValue /> */}
      {/* <UseCallback /> */}
      {/* <UseMemo /> */}
      {/* <ContextPage /> */}
    </>
  );
}
