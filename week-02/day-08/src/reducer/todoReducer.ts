import { TTodo } from '../types/todo';

export type TodoReducerAction =
  | { type: 'ADD'; payload: string }
  | { type: 'TOGGLE'; payload: number }
  | { type: 'DELETE'; payload: number };

export const todoReducer = (todos: TTodo[], action: TodoReducerAction) => {
  switch (action.type) {
    case 'ADD':
      return [
        ...todos,
        { id: Math.random(), text: action.payload, isCompleted: false },
      ];
    case 'TOGGLE':
      return todos.map((todo) =>
        todo.id === action.payload
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo
      );
    case 'DELETE':
      return todos.filter((todo) => todo.id !== action.payload);
    default:
      return todos;
  }
};
