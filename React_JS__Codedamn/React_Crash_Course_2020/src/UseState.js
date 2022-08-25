import React from "react";

export default function UseState() {
    let [counter, setCounterVal] = React.useState(5);
    const change = (e) => {
        //counter++; // this statement will only update value of counter but wont re-render the value of screen, use setState() to update and re-render.
        setCounterVal(counter + 10);  //setState() which is an asynchronous function does not immediately mutate this.state but creates a pending state transition. Accessing this.state after calling this method can potentially return the existing value
    };

    return (
        <>
            <h1 className="h1">{counter}</h1>
            <button onClick={change}>click me</button>
        </>
    );
}