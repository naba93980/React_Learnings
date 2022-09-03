import React from "react";
import { BrowserRouter, Route, Link } from 'react-router-dom';

// function Home() {
//     return <h1>Home</h1>
// }

// function About() {
//     return <h1>About</h1>
// }

import Home from "./RoutingComponents/Home";
import About from "./RoutingComponents/About";

export default function Routing() {
    return (
      <BrowserRouter>
          <Route path="/" exact={true} component={Home} />
          <Route path="/About" exact={true} component={About} />
      </BrowserRouter>
    );
}
