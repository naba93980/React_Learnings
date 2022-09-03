import React from "react";
import Button from "./Button";
import countContext from "./CountContext";

export default function DisplayCount() {
  return (
    <div>
      {/* The function receives the current context value and returns a React node*/}
      <countContext.Consumer>
        {(value) => <h1>{value.count}</h1>}
      </countContext.Consumer>
      <Button />
    </div>
  );

  // return (
  // <div>
  //   {props.count}
  //   <Button setCount={props.setCount} />
  // </div>
  // );
}
