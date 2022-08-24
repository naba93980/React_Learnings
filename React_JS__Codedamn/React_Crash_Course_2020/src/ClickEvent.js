import React from "react";

function Event() {
  var clicked = false; //gets captured by functions below, javascript closure concept
  const change = (e) => {
    console.log(e);
    if (!clicked) {
      document.querySelector(".h1").innerHTML = "Bye World";
      clicked = true;
    } else {
      document.querySelector(".h1").innerHTML = "Hello World";
      clicked = false;
    }
  };
  return (
    <>
      <h1 className="h1">HelloWorld</h1>
      <button onClick={change}>click me</button>
    </>
  );
}
export default Event;
