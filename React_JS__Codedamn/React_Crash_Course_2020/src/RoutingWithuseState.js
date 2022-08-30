import React from "react";
import { useState } from "react";

function Naba() {
  return <h1>Naba</h1>;
}
function NotNamed() {
  return <h1>Mr.X</h1>;
}

function About() {
  return <h1>About</h1>;
}

function Profile(props) {
  if (props.name === "nabaa") return <Naba />;
  else return <NotNamed />;
}

export default function RoutingWithuseState() {
  let r = (
    <div>
      <h1>App</h1>
      <button onClick={change} value="about">
        about
      </button>
      <button onClick={change} value="profile">
        profile
      </button>
    </div>
  );

  const [ren, setRen] = useState(r);

    function change(e) {
      console.log(e.target);
    if (e.target.value === "about") {
      r = <About />;
    } else {
      if (e.target.value === "profile") r = <Profile name="naba" />;
    }

    setRen(r);
  }
  return ren;
}
