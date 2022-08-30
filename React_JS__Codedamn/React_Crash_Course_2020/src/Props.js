import React from "react";

function Timing(props) {
    console.log(props);
  return (
    <p>
      Good {props.time} {props.name}
    </p>
  );
}
export default function Greet() {
    return <Timing time="day" name="naba" dob={{ date:28, month:1 }} year={2000}/>;
}
