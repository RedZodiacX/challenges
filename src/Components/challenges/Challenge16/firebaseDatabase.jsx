import { database } from './firebase/config';
import { ref, update, remove } from 'firebase/database';

// Función para actualizar el estado de una tarea (completada o pendiente)
export const toggleTodoCompletion = (id, completed) => {
    const todoRef = ref(database, `todos/${id}`);
    update(todoRef, { completed: !completed });
};

// Función para eliminar una tarea
export const deleteTodo = (id) => {
    const todoRef = ref(database, `todos/${id}`);
    remove(todoRef);
};
