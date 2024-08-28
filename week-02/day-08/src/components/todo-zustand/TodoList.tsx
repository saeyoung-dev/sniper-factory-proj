import { TTodo } from '../../types/todo';
import TodoListItem from './TodoListItem';

const TodoList = ({ todos }: { todos: TTodo[] }) => {
  return (
    <>
      <ul className='flex flex-col gap-4 mt-4 max-h-[284px] overflow-scroll'>
        {todos.map((todo) => (
          <TodoListItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </>
  );
};
export default TodoList;
