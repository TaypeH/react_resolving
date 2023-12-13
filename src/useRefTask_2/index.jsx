import { useRef, useState } from "react";

const UseRefTask = () => {
    const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);
    const ulRef = useRef();
    const timerRef = useRef();

    const addNumber = () => {
        const lastNumber = numbers[numbers.length - 1];
        setNumbers([...numbers, lastNumber + 1]);
    };

    const start = () => {
        const timer = timerRef.current;
        timer.current = setInterval(() => addNumber, 1000);
    }
    
    const stop = () => {
        const timer = timerRef.current;
        clearInterval(timer);
    }

    return (
        <>
            <div className="app">
                <h2>useRef</h2>
                <ul ref={ulRef}>
                    {numbers.map((number) => (
                        <li key={number}>{number}</li>
                    ))}
                </ul>
            </div>
            <button onClick={addNumber}>Add Number</button>
            <button onClick={start}>Start</button>
            <button onClick={stop}>Stop</button>
        </>
    );
}

export default UseRefTask;
