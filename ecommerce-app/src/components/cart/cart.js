import React, { useState, useEffect } from "react";

export function AddToCart() {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        console.log(counter);
    }, [counter]);

    function onIncrement() {
        setCounter(counter + 1);
    }

    function onDecrement() {
        setCounter(counter - 1);
    }

    return (
        <div>
            <button onClick={onDecrement}>-</button>
            <div>{counter}</div>
            <button onClick={onIncrement}>+</button>
        </div>
    )
}