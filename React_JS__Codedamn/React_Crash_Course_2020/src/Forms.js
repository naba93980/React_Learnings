import React, { useState } from "react";

export default function Form() {
  const [name, updateName] = useState("");

  function handleChange(e) {
    console.log(e.target.value);
    updateName(e.target.value);
  }
  function submitForm() {
    console.log(name);
  }
  return (
    <div>
      <input type="text" value={name} onChange={handleChange} />
      <button onClick={submitForm}>submit</button>
    </div>
  );
}
