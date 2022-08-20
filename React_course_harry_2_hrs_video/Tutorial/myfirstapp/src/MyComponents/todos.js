import React from "react";
import { Todoitem } from "./todoitem";
export const Todos = (props) => {
  console.log(props.todosarrayprops[1]);
  return (
    <div>
      <h1>to do list</h1>
      {/* <Todoitem todoarrelementobject={props.todosarrayprops[0]} />
      <br />
      <Todoitem todoarrelementobject={props.todosarrayprops[1]} />
      <br />
      <Todoitem todoarrelementobject={props.todosarrayprops[2]} /> */}
      {props.todosarrayprops.map((element) => {
        return <Todoitem todoarrelementobject={element} />;
      })}
    </div>
  );
};
