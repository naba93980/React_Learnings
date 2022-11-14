import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./cakeSlice";

export default function CakeView() {
  const numberOfCakes = useSelector((state) => state.cakeReducer.numOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of cakes - {numberOfCakes}</h2>
      <button onClick={() => dispatch(ordered(1))}>Order Cake</button>
      <button onClick={() => dispatch(restocked(20))}>Restock Cake</button>
    </div>
  );
}
