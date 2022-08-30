import React from "react";

export default function List() {
  let arr = [1, 2, 3];
  return (
    <div>
      {/* <div>{[<h1 style={{ display: "inline" }}>hi</h1>, 2, 3, 4]}</div> */}
      <h2>
        {1}
        {2}
      </h2>
      <h3>
        <ul>
          {arr.map((ele, i) => (
            <li key={ele}>{ele * ele}</li>
          ))}
        </ul>
      </h3>
    </div>
  );
}
