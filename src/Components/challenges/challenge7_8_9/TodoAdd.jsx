import React, { useState } from 'react';

export const TodoAdd = ({ handleAddTodo }) => {
    const [newTodo, setNewTodo] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        if (newTodo.trim().length <= 1) return;

        handleAddTodo({
            id: new Date().getTime(),
            description: newTodo,
            done: false
        });

        setNewTodo(''); // Limpiar el campo después de agregar
    };

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                className="form-control"
                placeholder="Nueva tarea..."
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
            />
            <button type="submit" className="btn btn-outline-primary mt-1">
                Agregar
            </button>
        </form>
    );
};
