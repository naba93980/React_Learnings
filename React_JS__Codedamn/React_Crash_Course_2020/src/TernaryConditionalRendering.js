import React from "react";

export default function TernaryConditionalRendering() {
  return <h1>Hello World {1 + 1 < 5 ? <p>true</p> : <p>false</p>}</h1>;
}
