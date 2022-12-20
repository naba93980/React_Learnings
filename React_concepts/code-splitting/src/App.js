import { useState } from "react";

function App() {
  const [names, setNames] = useState(null);
  const onLoad = () => {
    import("./names")
      .then(module => {
        console.log(module);
        import("./utilities").then(({ makeUpperCase }) =>
          setNames(makeUpperCase(module.default))
        );
      });
  }
  return (
    <>
      <p>Home</p>
      <button onClick={onLoad}>Load</button>
      <p>{ JSON.stringify(names)}</p>
    </>
  );
}

export default App;
