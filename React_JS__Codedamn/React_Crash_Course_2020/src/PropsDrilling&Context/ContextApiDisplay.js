import React from "react";
import { useContext } from "react";
import countContext from "./CountContext";
import Button from "./ContextApiButton";

export default function DisplayCount() {
  const { count } = useContext(countContext);
  return (
    <div>
      <h1>{count}</h1>
      <Button />
    </div>
  );
}
