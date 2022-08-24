import React from "react";
import ReactDOM from "react-dom";
// import HelloWorld from './HelloWorld';
// import MyClassComponent from "./MyClassComponent";
// import JSX from './JSX'
// import ConditionalRendering from "./ConditionalRendering";
// import NestingExp from "./NestingExpression";
import EmptyTag from "./EmptyTag";


// Rendering HelloWorld component -

// ReactDOM.render(<HelloWorld />, document.getElementById("root"), () => {
//   console.log("HelloWorld rendered inside root div");
// });



// Rendering MyClassComponent -

// ReactDOM.render(<MyClassComponent/>, document.getElementById("root"), () => {
//     console.log( "MyClassComponent div rendered inside root div" );
// });


// Rendering JSX component

// ReactDOM.render(<JSX/>, document.getElementById("root"), () => {
//     console.log( "my jsx component div rendered inside root div" );
// });


// Conditional Rendering

// ReactDOM.render(<ConditionalRendering/>, document.getElementById("root"), () => {
//     console.log( "condition checked and rendered inside root div" );
// });


// Rendering Nesting Expressions

// ReactDOM.render(<NestingExp/>, document.getElementById("root"), () => {
//     console.log( "nested expressions in jsx rendered inside root div" );
// });


ReactDOM.render(<EmptyTag />, document.getElementById("root"), () => {
    console.log( "nested expressions in jsx rendered inside root div" );
});


