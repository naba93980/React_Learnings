import React from "react";

function Timing(props) {
  console.log(props);
  return (
    <div>
          Good {props.time} {props.name} <br />
          {props.children}
    </div>
  );
}
export default function Greet() {
  return (
    <Timing time="day" name="naba">
      {<p>hello guys</p>}   { /* passed as children prop to the child compnent*/ }
    </Timing>
  );
}
// The content passed to a component through props.children can include undefined, null, a Boolean,
// a number, a string, a React element,  or an array of any of these types recursively.
// It can also be a function returning one of these types.