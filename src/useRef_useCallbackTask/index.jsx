import { useCallback, useRef, useState } from "react";

const UseRefUseCallbackTask = () => {
    const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);
    const ulRef = useRef();
    const numbersRef = useRef();

    numbersRef.current = numbers;

    const addNumber = () => {
        setNumbers(prev => [...prev, numbers[prev.length - 1] + 1]);
    };

    // const handleScroll = () => {
    //     console.log("scrolling");
    // }

    const handleScroll = useCallback(() => {
        console.log("scrolling", numbersRef.current);
    }, []);

    const start = () => {
        const { current: timer } = ulRef;
        timer.addEventListener("scroll", handleScroll);
    }

    const stop = () => {
        const { current: timer } = ulRef;
        timer.removeEventListener("scroll", handleScroll);
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

export default UseRefUseCallbackTask;
