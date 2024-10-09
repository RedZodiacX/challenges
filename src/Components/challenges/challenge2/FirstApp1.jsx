import React, { useState } from 'react';

const FirstApp1 = () => {
    const [counter, setCounter] = useState(10);

    const handleSubstract = () => setCounter(counter - 1);
    const handleReset = () => setCounter(10);

    return (
        <div>
            <h1>Counter: {counter}</h1>
            <button onClick={handleSubstract}>Restar</button>
            <button onClick={handleReset}>Reiniciar</button>
        </div>
    );
};

export default FirstApp1;
