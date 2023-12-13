import { useEffect, useState, useRef, useCallback } from "react";
// import { handleScroll } from "./helper";

const UseRefTask = () => {
    let initialNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const [numbers, setNumbers] = useState(initialNumbers);
    const ulRef = useRef();

    const numbersRef = useRef(numbers);

    const handleScroll = useCallback(() => {
        console.log("scrolling");
        console.log("numbers", numbersRef.current);
    }, [])

    const addScroll = () => {
        ulRef.current.addEventListener("scroll", handleScroll);
    }

    const removeScroll = () => {
        ulRef.current.removeEventListener("scroll", handleScroll);
    }

    const add = () => {
        // const newArray = numbers.concat(numbers[numbers.length - 1] + 1);
        setNumbers(prev => [...prev, numbers[numbers.length - 1] + 1]);
    }

    return (
        <>
            <div className="app">
                <h2>{`${Math.random()}`.substring(2, 6)}</h2>
                {/* <h2>numbers</h2> */}
                <ul ref={ulRef}>
                    {numbers.map((number) => (
                        <li key={number}>{number}</li>
                    ))}
                </ul>
            </div>
            <button onClick={addScroll}>add scroll</button>
            <button onClick={removeScroll}>remove scroll</button>
            <button onClick={add}>+ 1</button>
        </>
    );
}

export default UseRefTask;
