import React from "react";
import { Todoitem } from "./todoitem";
export function Todos(props) {
  return (
    <div className="row justify-content-center p-5" style={
      {
        minHeight: "50vh"
      }
    }>
      {
        props.todos.length === 0 ? "no todos to display" : props.todos.map((e, i) => {
          return <Todoitem key={i} item={e} deleteTodo={props.deleteTodo} />;
        })
      }
    </div >
  );
}
