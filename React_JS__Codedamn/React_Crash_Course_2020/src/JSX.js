import React from "react"

//this module discuss basic ideas of functional components, jsx types

function JSX() {

  const cssProps = { margin: "2px" };
  return (
    <div id="jsx-types">
      <h1>Hello World {/* null, numbers, HTML, strings, arrays */} </h1>
      <h1>Hello World Number {2 + 2}</h1>
      <h1>Hello World {"String"}</h1>
      <h1>Hello World Array - {["[one] ", "[two]"]}</h1>
      <h1>Hello World HTML element {<h6 style={cssProps}>wow</h6>}</h1> 
    </div>
  );
}
export default JSX;


// The style attribute accepts a JavaScript object with camelCased properties rather than a CSS string.
// This is consistent with the DOM style JavaScript property, is more efficient, and prevents XSS security holes.