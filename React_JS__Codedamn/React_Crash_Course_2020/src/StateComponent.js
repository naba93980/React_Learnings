import React from "react";

export default function DirectDOMaccess() {
  let counter = 0;
  var g = document.querySelector(".h1"); // returns null bcoz when this line is executed, DOM elements are not rendered on screen bcoz the return statement is executed after this line executed, that is why useRef() should be used.

  const change = (e) => {
    counter++;
    console.log(counter);
    document.getElementsByClassName("h1")[0].innerHTML = counter; //this works perfectly bcoz the DOM is rendered before the button is clicked
  };
  const reset = (e) => {
    counter = 100;
    console.log(counter);
    // document.querySelector(".h1").innerHTML = counter;
  };
  return (
    <>
      <h1 className="h1">{counter}</h1>
      <button onClick={change}>click me</button>
      <button onClick={reset}>reset me</button>
    </>
  );
}

// manipulaying DOM directly here is problematic as it based on external variable counter and not on the state(bortoman obostha) of the element in DOM
// when we use useState(), the DOM is updated based on the state value(bortoman obostha) of the element in the DOM.