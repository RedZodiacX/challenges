import React, { useState } from 'react';

const ComponentApp = () => {
    const [category, setCategory] = useState('');
    const [categories, setCategories] = useState([]);

    const handleInputChange = (e) => setCategory(e.target.value);
    const handleAddCategory = () => {
        if (category.trim().length > 0) {
            setCategories([category, ...categories]);
            setCategory('');
        }
    };

    return (
        <div>
            <input
                type="text"
                value={category}
                onChange={handleInputChange}
            />
            <button onClick={handleAddCategory}>Agregar Categoría</button>
            <ul>
                {categories.map((cat, index) => (
                    <li key={index}>{cat}</li>
                ))}
            </ul>
        </div>
    );
};

export default ComponentApp;
