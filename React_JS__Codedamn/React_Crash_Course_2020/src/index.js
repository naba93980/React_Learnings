import React from "react";
import ReactDOM from "react-dom";
import HelloWorld from './HelloWorld';
import MyClassComponent from "./MyClassComponent";


// Rendering HelloWorld functional component -

// ReactDOM.render(<HelloWorld />, document.getElementById("root"), () => {
//   console.log("HelloWorld rendered inside root div");
// });



// Rendering MyClassComponent - 

ReactDOM.render(<MyClassComponent/>, document.getElementById("root"), () => {
    console.log( "my component div rendered inside root div" );
});

