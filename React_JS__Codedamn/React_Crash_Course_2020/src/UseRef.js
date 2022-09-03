import React, { useRef } from "react";

// useRef() hook is used to directly play with the HTML DOM
export default function UseRef() {
  const h1Ref = useRef();
  setTimeout(() => {
    console.log(h1Ref.current.innerHTML);
  },2000);

  return (
    <div>
      <h1 ref={h1Ref}>UseRef</h1>
    </div>
  );
}