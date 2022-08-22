import React from "react";
import ReactDOM from "react-dom";
import App from './App'
// import MyComponent from "./MyComponent";


ReactDOM.render(<App/>, document.getElementById("root"), () => {
    console.log( "app div rendered inside root div" );
});


// ReactDOM.render(<MyComponent/>, document.getElementById("root"), () => {
//     console.log( "my component div rendered inside root div" );
// });

