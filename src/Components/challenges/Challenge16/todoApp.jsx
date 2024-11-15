import React, { useState, useEffect } from 'react';
import { addTodo, getTodos, toggleTodoCompletion, deleteTodo } from './firebaseDatabase';

const TodoApp = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');

    useEffect(() => {
        // Escuchar cambios en las tareas en tiempo real
        getTodos(setTodos);
    }, []);

    const handleAddTodo = () => {
        if (newTodo.trim()) {
            addTodo(newTodo);
            setNewTodo(''); // Limpiar el campo después de agregar
        }
    };

    const handleToggleCompletion = (todo) => {
        toggleTodoCompletion(todo.id, todo.completed);
    };

    const handleDeleteTodo = (id) => {
        deleteTodo(id);
    };

    return (
        <div>
            <h2>Lista de Tareas</h2>
            <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="Escribe una nueva tarea"
            />
            <button onClick={handleAddTodo}>Agregar Tarea</button>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                        <span onClick={() => handleToggleCompletion(todo)}>
                            {todo.text}
                        </span>
                        <button onClick={() => handleDeleteTodo(todo.id)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoApp;
