import React from "react";
import { useState } from "react";
import { AddTodo } from "./MyComponents/addtodo.js"
import { Header } from "./MyComponents/header.js";
import { Todos } from "./MyComponents/todos.js";
import { Footer } from "./MyComponents/footer.js";

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
    setToDosArray((todos) => todos.filter((ele) => ele !== todoitem));
  }
  const addTodo = (title, desc) => {
    let sno = todos.length + 1;
    setToDosArray([...todos, { sno, title, desc }]);
  }
  return (
    <div className="container-fluid p-0">
      <div className="row">
        <div className="col-12">
          <Header title="My Todos List" />
          <AddTodo addTodo={addTodo} />
          <Todos todos={todos} deleteTodo={deleteTodo} />
          <Footer />
        </div>
      </div>
    </div>
  );
}
export default App;
