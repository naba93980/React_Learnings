import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./RoutingComponents/Home";
import About from "./RoutingComponents/About";
import Greet from "./RoutingComponents/Greet";

export default function ParameterizedRouting() {
  return (
    <BrowserRouter>
      <Route path="/" exact={true} component={Home} />
      <Route path="/About" exact={true} component={About} />
      <Route path="/About/:name" exact={true} component={Greet} />
    </BrowserRouter>
  );
}
