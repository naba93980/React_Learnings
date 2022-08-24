import React from "react";

export default function StateComponent() {
    let counter = 0;
    const change = (e) => {
        counter++
        console.log(counter);
        document.getElementsByClassName('h1')[0].innerHTML = counter;
    };
    const reset = (e) => {
        counter = 0;
        console.log(counter);
        document.querySelector('.h1').innerHTML = counter;
    };
    return (
        <>
            <h1 className="h1">{counter}</h1>
            <button onClick={change}>click me</button>
            <button onClick={reset}>reset me</button>
        </>
    );
}