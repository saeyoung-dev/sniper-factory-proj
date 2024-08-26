import { useState } from 'react';
import TodoEditor from './TodoEditor';
import TodoList from './TodoList';
import { TTodo } from './Todo.types';

const Todo = () => {
  const [todos, setTodos] = useState<TTodo[]>([
    {
      id: 1,
      text: 'hello',
      isCompleted: false,
    },
  ]);

  const addTodos = (text: string) => {
    setTodos((todos) => [
      ...todos,
      { id: Math.random(), text, isCompleted: false },
    ]);
  };

  const toggleTodo = (id: number) => {
    setTodos((todos) => {
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      );
    });
  };
  return (
    <>
      <div className='item-middle bg-black'>
        <div className='w-[375px] h-[502px] py-10 px-[25px] text-[#4f4f4f] bg-white border border-[#d1d1d1] rounded-lg inter '>
          <h1 className='text-xl font-bold mb-[10px]'>Todo List App</h1>
          <p className='text-sm mb-5'>Please enter your details to continue.</p>
          {/* 등록 */}
          <TodoEditor addTodo={addTodos} />
          {/* 목록 */}
          <TodoList todos={todos} toggleTodo={toggleTodo} />
        </div>
      </div>
    </>
  );
};
export default Todo;
