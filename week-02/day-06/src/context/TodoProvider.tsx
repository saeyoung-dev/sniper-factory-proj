import { useState, useMemo, createContext } from 'react';
import { TTodo } from '../types/todo';

type TodoContextType = {
  todos: TTodo[];
};

type TodoContextFnType = {
  addTodo: (text: string) => void;
  deleteTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
};

const TodoContext = createContext<TodoContextType | null>(null);
const TodoFnContext = createContext<TodoContextFnType | null>(null);

const TodoProvider = ({ children }: { children: React.ReactNode }) => {
  const [todos, setTodos] = useState<TTodo[]>([]);

  const addTodo = (text: string) => {
    setTodos((todos) => [
      ...todos,
      { id: Math.random(), text, isCompleted: false },
    ]);
  };

  const toggleTodo = (id: number) => {
    // 1
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <TodoFnContext.Provider value={{ toggleTodo, deleteTodo, addTodo }}>
        <TodoContext.Provider value={{ todos }}>
          {children}
        </TodoContext.Provider>
      </TodoFnContext.Provider>
    </>
  );
};
export default TodoProvider;
