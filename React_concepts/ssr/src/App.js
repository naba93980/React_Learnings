import React from "react";
import { Route, Router } from "react-router";
import Home from "./pages/HomePageComponent";

function App() {
  return (   
    <>
      <Router>
        <Route path="/" exact={true} render={Home} />
      </Router>
    </>
  )
}

export default App;
