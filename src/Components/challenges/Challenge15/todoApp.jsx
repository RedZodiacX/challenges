import React, { useState, useEffect } from 'react';
import { addTodo, getTodos } from './firebaseDatabase';

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
                    <li key={todo.id}>{todo.text}</li>
                ))}
            </ul>
        </div>
    );
};

export default TodoApp;
