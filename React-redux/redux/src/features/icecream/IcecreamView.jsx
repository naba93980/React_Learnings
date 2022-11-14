import React from 'react'
import { useState } from 'react';
import { useSelector,useDispatch } from "react-redux";
import { ordered, restocked } from './icecreamSlice';

export default function IcecreamView() {

  const [value, setValue] = useState(5);
  const numberOfIcecream = useSelector((state) => state.icecreamReducer.numOfIcecreams);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of icecream - { numberOfIcecream }</h2>
      <button onClick={() => dispatch(ordered(1))}>Order icecream</button>
      <input type="number" value={value} onChange={(e) => { setValue(parseInt(e.target.value))}} />
      <button onClick={()=>dispatch(restocked(value))}>Restock icecream</button>
    </div>
  );
}
