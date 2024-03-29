import { useState } from "react";

type ButtonProps = {
    text?: string;
}

export function Button(){
    const [counter, setCounter] = useState(0);

    function increment(){
        setCounter(counter + 1);
    }

    return (
        <button onClick={increment}>
            {counter}
        </button>
    );
}