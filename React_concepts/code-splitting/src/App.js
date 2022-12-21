import  React,{ useState } from "react";

function loadComponent(importFunc) {
  return class WrappedComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        Component: null,
      }
    }
    componentDidMount() {
      console.log("inside didMount");
      importFunc().then((mod) => {
        this.setState({
          Component: mod.default,
        })
      })
    }
    render() {
      console.log("inside render");
      return this.state.Component ? (
        <this.state.Component {...this.props} />
      ) : null;
    }
  };
}

const MyDefaultComponent = loadComponent(() =>
  import("./MyDefaultComponent" /* webpackChunkName: "mydefaultcomponent" */)
);

function App() {
  console.log("app");
  console.log(MyDefaultComponent);
  const [names, setNames] = useState(null);

  const onLoad = async () => {
    const names = (await import("./names" /* webpackChunkName: "names" */)).default;
    
    const makeUpperCase = (await import("./utilities" /* webpackChunkName: "utilities" */)).makeUpperCase;
    setNames(makeUpperCase(names));
  };

  return (
    <>
      <p>Home</p>
      <button onClick={onLoad}>Load</button>
      <p>{JSON.stringify(names)}</p>
      {names && <MyDefaultComponent />}
    </>
  );
}

export default App;
