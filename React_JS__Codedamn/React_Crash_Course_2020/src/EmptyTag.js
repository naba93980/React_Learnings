import React, { useState } from "react";

function Hello() {
  return <h1>Hello</h1>;
}

function Bye() {
  return <h1>Bye</h1>;
}

export function EmptyTag() {
  let r = (
    <>
      <Hello/>
      <h2>world</h2>
      <button onClick={change}>click</button>
    </>
  );

  const [ren, setRen] = useState(r);

  function change() {
    r = (
      <>
        <Bye/>
        <h2>world</h2>
        <button onClick={change}>click</button>
      </>
    );
    console.log(r);
    setRen(r);
  }

  return ren;
}
export default EmptyTag;
