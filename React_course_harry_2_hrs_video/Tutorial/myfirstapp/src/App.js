// import logo from "./logo.svg";
import "./App.css";
import { Header } from "./MyComponents/header.js"
import { Todos } from "./MyComponents/todos.js";
// import footer from "./MyComponents/footer.js";



function App() {
  //below code is jsx
  // let sirname = "modak";
  let todosarray = [
    {
      sno: 1,
      title: "go to market",
      description : " 1yo need to go maret to get this done",
    },
    {
      sno: 2,
      title: "go to mall",
      description : " 2yo need to go maret to get this done",
    },
    {
      sno: 3,
      title: "go to ghat",
      description : " 3yo need to go maret to get this done",
    },
  ]
  console.log(todosarray)
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <div> {`nabajyoti ${sirname}`}</div>
    //     <div> {2 + 20}</div>
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>Edit src/App.js and save to reload.</p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    //------------------
    // <div className='App'>
    //   <nav>
    //     {"hello"}
    //   </nav>
    // </div>
    <div id="app">
      <Header val={45} />
      {/* {Header({ title: "My Todo List", val: 78 })} avoid it */}
      <Todos todosarrayprops={todosarray} />
      {/* {todoitem()} */}
      {/* {footer()} */}
    </div>
  );
}

export default App;
