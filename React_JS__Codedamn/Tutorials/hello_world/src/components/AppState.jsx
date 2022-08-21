import React, { useState } from "react";

export default function AppState() {
  const [counter, setCounter] = useState(47); //47
  // const counterSet = useState(47); --can use this format as well
  function buttoninc() {
    setCounter(250);
    console.log("i was incpressed");
  }
  function buttondec() {
    setCounter((oldval) => oldval - 10);
    console.log("i was decpressed");
  }
  return (
    <div>
      <h1>counter : {counter}</h1>
      <button onClick={buttoninc}>clickme to increse</button>
      <button onClick={buttondec}>clickme to decrease</button>
    </div>
  );
}
