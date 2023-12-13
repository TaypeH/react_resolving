import { useEffect, useRef, useState } from "react";

const UseRefTask = () => {
    const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);
    const ulRef = useRef();

    const handleScroll = () => {
        console.log("scrolling");
    }

    useEffect(() => {
        const ulElem = ulRef.current;

        ulElem.addEventListener("scroll", handleScroll);
        return () => {
            ulElem.removeEventListener("scroll", handleScroll);
        }
    }, []);

    const removeScroll = () => {
        const ulElem = ulRef.current;

        ulElem.removeEventListener("scroll", handleScroll);
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
            <button onClick={removeScroll}>Unsubscribe</button>
        </>
    );
}

export default UseRefTask;
