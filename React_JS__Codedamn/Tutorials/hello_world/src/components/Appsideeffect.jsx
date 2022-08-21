import React, { useState, useEffect } from "react";

export default function Appsideeffect() {
  const [counter, setCounter] = useState(0); //47
  // const counterSet = useState(47); --can use this format as well

  useEffect(() => {
    console.log("i ran " + counter);
  }, [counter]);

  function buttoninc() {
    setCounter(250);
    console.log("i was incpressed");
  }

  function buttondec() {
    setCounter((oldval) => oldval - 1);
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
