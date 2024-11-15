import React from 'react';
import { useTodo } from './hook/useTodo'

const TodoAdd1 = () => {
    const { todos, addTodo, deleteTodo, toggleTodo, countTodos, countPendingTodos } = useTodo();

    return (
        <div>
            <h2>Todo List</h2>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id} onClick={() => toggleTodo(todo.id)} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                        {todo.text}
                        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>
            <p>Total: {countTodos()}</p>
            <p>Pending: {countPendingTodos()}</p>
        </div>
    );
};

export default TodoAdd1;
