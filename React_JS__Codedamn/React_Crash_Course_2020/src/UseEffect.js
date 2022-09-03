import React, { useRef, useEffect, useState } from "react";

// useRef() hook is used to directly play with the HTML DOM
export default function UseRef() {
    const h1Ref = useRef();
    const [counter, setCounter] = useState(1);
    const [counter2, setCounter2] = useState(1);
    // console.log( h1Ref );

    function update1(e) {
        setCounter(counter + 1)
    }

    function update2(e) {
        setCounter2(counter2 + 1)
    }

    // close to rcc componenttDidMount()
    // useEffect(() => {
    //     console.log(h1Ref);
    // }, [])
    // if the empty dependency array exist, the cb() runs only when the component mounts for the first time

    //  ---------------------------------------------------------

    // useEffect(() => {
    //     console.log(h1Ref);
    // })
    // if the dependency array doesnot exist then the cb()
    // executes everytime the omponents mounts + updates

    //  ---------------------------------------------------------

    // close to rcc componenttDidMount() + componentDidUpdate()
    useEffect(() => {
        console.log(h1Ref);
    }, [counter, counter2])

    // if the dependency array exist, the cb() runs when the component mounts and dependency changes triggers update

    return (
        <div ref={h1Ref}>
            <h1>UseEffect {counter} {counter2}</h1>
            <button onClick={update1}>counter 1</button>
            <button onClick={update2}>counter 2</button>
        </div>
    );
}