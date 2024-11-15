import { useState } from 'react';

export const useTodo = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => setTodos([...todos, todo]);

  const deleteTodo = (id) => setTodos(todos.filter(todo => todo.id !== id));

  const toggleTodo = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const countTodos = () => todos.length;

  const countPendingTodos = () => todos.filter(todo => !todo.completed).length;

  return { todos, addTodo, deleteTodo, toggleTodo, countTodos, countPendingTodos };
};
