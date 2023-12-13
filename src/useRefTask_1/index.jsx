import { useEffect, useState } from "react";

const UseRefTask = () => {
    let initialNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const [numbers, setNumbers] = useState(initialNumbers);

    let ulElemTag = null

    useEffect(() => {
        ulElemTag = document.querySelector("ul");
    }, [numbers])

    // useEffect(() => {
    //     const ulElem = ulElemTag.addEventListener("scroll", handleScroll);

    //     return () => {
    //         ulElem.removeEventListener("scroll", handleScroll);
    //     }
    // }, []);

    const handleScroll = () => {
        console.log("scrolling");
    }

    const addScroll = () => {
        ulElemTag.addEventListener("scroll", handleScroll);
    }

    const removeScroll = () => {
        ulElemTag.removeEventListener("scroll", handleScroll);
    }

    const add = () => {
        numbers.push( numbers[numbers.length - 1] + 1);
        console.log(numbers)
    }

    return (
        <>
            <div className="app">
                <h2>{`${Math.random()}`.substring(2, 6)}</h2>
                {/* <h2>numbers</h2> */}
                <ul>
                    {numbers.map((number) => (
                        <li key={number}>{number}</li>
                    ))}
                </ul>
            </div>
            <button onClick={addScroll}>Subscribe</button>
            <button onClick={removeScroll}>Unsubscribe</button>
            <button onClick={add}>+ 1</button>
        </>
    );
}

export default UseRefTask;
