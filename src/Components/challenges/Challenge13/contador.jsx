// src/Components/challenges/Challenge13/contador.jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, incrementByAmount } from './counterSlice';

const Contador = () => {
    const count = useSelector((state) => state.counter);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Contador: {count}</h1>
            <button onClick={() => dispatch(increment())}>Incrementar</button>
            <button onClick={() => dispatch(decrement())}>Decrementar</button>
            <button onClick={() => dispatch(incrementByAmount(5))}>
                Incrementar por 5
            </button>
        </div>
    );
};

export default Contador;
