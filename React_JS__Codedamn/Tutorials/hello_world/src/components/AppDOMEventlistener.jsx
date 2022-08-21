import React from "react";

export default function AppDOMEventlistener() {
  let abc = 0;
  function print() {
    console.log(`clicked for ${++abc} times`);
  }
  return (
    <div>
      <button onClick={print}>click mee</button>
    </div>
  );
}
