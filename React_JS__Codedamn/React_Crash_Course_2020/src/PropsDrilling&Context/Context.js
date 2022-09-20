import React, { useState} from "react";
// import DisplayCount from "./DisplayCount.js";
import DisplayCount from "./ContextApiDisplay";
import countContext from "./CountContext";

export default function Context() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <countContext.Provider value={{count,setCount}} >
        <DisplayCount/>
      </countContext.Provider>
    </div>
  );

  //   return (
  //     <div>
  //     <DisplayCount count={count} setCount={setCount} />
  //     </div>
  //   );
}

