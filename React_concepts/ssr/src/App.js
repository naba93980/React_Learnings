import React from "react";
import { Route, Routes } from "react-router";
import Home from "./pages/HomePageComponent";
import About from "./pages/AboutPageComponent";

function App() {
  return (
    <div>    
          <Routes>
            <Route path="/" exact={true} element={<Home />} />
            <Route path="/about" exact={true} element={<About />} />
          </Routes>
    </div>
  );
}

export default App;
