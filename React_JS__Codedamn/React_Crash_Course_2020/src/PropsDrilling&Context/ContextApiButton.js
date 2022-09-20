import React from "react";
import { useContext } from "react";
import countContext from "./CountContext";

export default function Button() {
    const { setCount } = useContext(countContext);
    const updateCount = () => {
        setCount((x) => x + 1);
    }
    // x is the value of the state that setCount is supposed to update...i.e here the 'count' state
    return (
        <div>
            <button onClick={updateCount}>click me</button>
        </div>
    )
}
