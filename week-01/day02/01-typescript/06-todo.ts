{
  interface Todo {
    id: number;
    text: string;
    completed: boolean;
  }

  const todos: Todo[] = [];

  const addTodo = (text: string) => {
    const todo: Todo = {
      id: todos.length + 1,
      text,
      completed: false,
    };
    todos.push(todo);
  };

  const removeTodo = (id: number) => {
    const findIndex = todos.findIndex((todo) => todo.id === id);
    todos.splice(findIndex, 1);
  };

  const toggleTodo = (id: number) => {
    const find = todos.find((todo) => todo.id === id);
    if (find) find.completed = !find.completed;
  };
}
