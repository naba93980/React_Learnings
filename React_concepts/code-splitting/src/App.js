import { useState } from "react";

function App() {
  const [names, setNames] = useState(null);
  const onLoad = async () => {
    const names = (await import("./names" /* webpackChunkName: "names" */)).default;
    const makeUpperCase =  (await import("./utilities" /* webpackChunkName: "utilities" */)).makeUpperCase;
    setNames(makeUpperCase(names));
  };

  return (
    <>
      <p>Home</p>
      <button onClick={onLoad}>Load</button>
      <p>{JSON.stringify(names)}</p>
    </>
  );
}

export default App;
