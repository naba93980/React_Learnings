import React, { useState} from "react";
import DisplayCount from "./DisplayCount.js";
import countContext from "./CountContext";

export default function UseContext() {
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

