import { database } from './firebase/config';
import { ref, set, push, onValue } from 'firebase/database';

// Función para agregar una tarea
export const addTodo = (todoText) => {
    const todoRef = ref(database, 'todos');
    const newTodoRef = push(todoRef); // Crea un nuevo ID
    set(newTodoRef, {
        text: todoText,
        completed: false,
    });
};

// Función para obtener tareas en tiempo real
export const getTodos = (callback) => {
    const todoRef = ref(database, 'todos');
    onValue(todoRef, (snapshot) => {
        const todos = [];
        snapshot.forEach((childSnapshot) => {
            todos.push({ id: childSnapshot.key, ...childSnapshot.val() });
        });
        callback(todos);
    });
};
