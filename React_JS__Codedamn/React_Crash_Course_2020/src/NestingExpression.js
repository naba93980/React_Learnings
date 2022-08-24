import React from "react";

export default function NestingExp() {
  const arr = [1, 2, 3, 4, 5];
  return (
    <div>
      <h1>
        Hello World
        {arr.map((ele) => <div>{ele * ele}</div>)}
      </h1>

      <h3>
        {[<div> {2 * 2} </div>, <div> {3 * 3} </div>, <div> {4 * 4} </div>]}
      </h3>
    </div>
  );
}
