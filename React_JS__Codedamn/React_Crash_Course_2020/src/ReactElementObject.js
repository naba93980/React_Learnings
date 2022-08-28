import React from "react";

export default function ReactElementObject() {
  console.log(<div>hello world {5 + 5}</div>);
  // Transpiled into React object by React.createElement("div", {}, "hello world", 5+5);

  return (
    <div>
      <p>{5 + 5}</p>
    </div>
  );
}
