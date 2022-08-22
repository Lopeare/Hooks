import { useState } from "react";

export const usePerson = (name = 'anonymous', location = 'anonymous') => {

    const [counter, setCounter] = useState(0)

    const increment = (value) => {
        setCounter(counter + value);
    }

    const decrement = (value = 1) => {
        setCounter(counter - value);
    }

    const reset = () => {
        setCounter(0);
    }

    return {
        name,
        points: counter,
        location,
        increment,
        decrement,
        reset,
    }
}