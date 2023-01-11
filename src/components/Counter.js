import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrementCounter, incrementCounter } from '../services/actions/counterAction';

const Counter = () => {

    const count = useSelector((state) => state.count)

    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(incrementCounter())
    }
    const handleDecrement = () => {
        dispatch(decrementCounter())
    }
    return (
        <div>
            <h2>Counter app</h2>
            <button onClick={handleDecrement}>Decrement</button>
            <h3>Count: {count}</h3>
            <button onClick={handleIncrement}>Increment</button>
        </div>
    );
};

export default Counter;