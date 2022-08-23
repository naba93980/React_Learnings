import React from "react"

//this module discuss basic ideas of functional components, jsx types

function JSX() {
    return (
        <div id="jsx-types">
        <h1>Hello World {/* null, numbers, HTML, strings, arrays */} </h1>
        <h1>Hello World Number {2 + 2}</h1>
        <h1>Hello World {"String"}</h1>
        <h1>Hello World Array - {["[one] ", "[two]"]}</h1>
        <h1>Hello World HTML element {<h6 style={{margin:"2px"}}>wow</h6>}</h1>
      </div>
    );
}
export default App; 
