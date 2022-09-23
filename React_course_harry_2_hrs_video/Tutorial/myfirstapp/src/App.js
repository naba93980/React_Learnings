import React from "react";
import { useState } from "react";
import { Header } from "./MyComponents/header.js";
import { Todos } from "./MyComponents/todos.js";
import footer from "./MyComponents/footer.js";

function App() {
  
  let todosArray = [
    {
      sno: 1,
      title: "go to market",
      description: " 1yo need to go maret to get this done",
    },
    {
      sno: 2,
      title: "go to mall",
      description: " 2yo need to go maret to get this done",
    },
    {
      sno: 3,
      title: "go to ghat",
      description: " 3yo need to go maret to get this done",
    },
  ];
  const [todos, setToDosArray] = useState(todosArray);
  const deleteTodo = (todoitem) => {
    setToDosArray((todos) => todos.filter((ele) => ele != todoitem));
  }
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <Header title="My Todos List" />
          <Todos todos={todos} deleteTodo={deleteTodo} />
        </div>
      </div>
    </div>
  );
}
export default App;
