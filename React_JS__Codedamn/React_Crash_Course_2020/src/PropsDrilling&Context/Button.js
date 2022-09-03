import React from "react";
import countContext from "./CountContext";

export default function Button() {
  return (
    <div>
      <countContext.Consumer>
        {(value) => {
          const updateCount = () => {
            const count = value.count;
            value.setCount(count + 1);
          };
          return <button onClick={updateCount}>click me</button>;
        }}
      </countContext.Consumer>
    </div>
  );

  //   return (
  //     <button onClick={()=>{props.setCount((count)=>count+1)}}>click me</button>
  //   )
}
