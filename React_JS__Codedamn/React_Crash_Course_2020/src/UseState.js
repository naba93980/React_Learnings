import React from "react";

export default function UseState() {
    let [counter, setCounterVal] = React.useState(5);
    const change = (e) => {
        setCounterVal(counter + 10);  //setState() does not immediately mutate this.state but creates a pending state transition. Accessing this.state after calling this method can potentially return the existing value
    };
    return (
        <>
            <h1 className="h1">{counter}</h1>
            <button onClick={change}>click me</button>
        </>
    );
}