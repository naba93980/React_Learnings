import React from "react";

function Timing(props) {
  console.log(props);
  return (
    <p>
          Good {props.time} {props.name} <br />
          {props.children}
    </p>
  );
}
export default function Greet() {
  return (
    <Timing time="day" name="naba">
      <p>hello guys</p>   { /* passed as children prop to the child compnent*/ }
    </Timing>
  );
}
