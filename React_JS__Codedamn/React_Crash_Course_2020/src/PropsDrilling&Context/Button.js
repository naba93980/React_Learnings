import React from "react";
import countContext from "./CountContext";

export default function Button() {
  const fn = (value) => {
    const updateCount = () => {
      // const count = value.count;
      value.setCount(value.count + 1);
    };
    return <button onClick={updateCount}>click me</button>;
  }
  return (
    <div>
      <countContext.Consumer>
        {fn}
      </countContext.Consumer>
    </div>
  );
  
  //   return (
  //     <button onClick={()=>{props.setCount((count)=>count+1)}}>click me</button>
  //   )
}
