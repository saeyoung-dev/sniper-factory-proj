import TodoListItem from './TodoListItem';
import { TTodo } from './Todo.types';

const TodoList = ({
  todos,
  toggleTodo,
}: {
  todos: TTodo[];
  toggleTodo: (id: number) => void;
}) => {
  return (
    <ul className='flex flex-col gap-4 mt-4 max-h-[284px] overflow-scroll'>
      {todos.map((todo) => (
        <TodoListItem
          id={todo.id}
          text={todo.text}
          isCompleted={todo.isCompleted}
          toggleTodo={toggleTodo(todo.id)}
        />
      ))}
    </ul>
  );
};

export default TodoList;
