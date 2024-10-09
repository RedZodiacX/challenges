import React from 'react';
import { useCounter } from './useCounter';

const FirstApp3 = () => {
    const { counter, increment, decrement, reset } = useCounter();

    return (
        <div>
            <h1>Counter: {counter}</h1>
            <button onClick={increment}>Incrementar</button>
            <button onClick={decrement}>Restar</button>
            <button onClick={reset}>Reiniciar</button>
        </div>
    );
};

export default FirstApp3;
