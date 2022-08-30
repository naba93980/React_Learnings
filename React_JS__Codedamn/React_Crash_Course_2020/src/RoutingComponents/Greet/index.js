import React from "react";
import { useParams } from "react-router-dom";

export default function Greet() {
  const params = useParams();
  console.log(params);
  return <div>Greet {params.name}</div>;
}
