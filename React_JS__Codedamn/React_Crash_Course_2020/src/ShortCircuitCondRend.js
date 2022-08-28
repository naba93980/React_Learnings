import React, { useState } from "react";

export default function ShortCircuitCondRend() {
  const [name, updateName] = useState("");

  let template = (
    <div>
      <p>{name === "admin" && "hello admin"}</p>
      <p>administrator</p>
      <input type="text" value={name} onChange={handleChange} />
    </div>
  );

  function handleChange(e) {
    console.log(e.target.value);
    updateName(e.target.value);
  }

  return template;
}
