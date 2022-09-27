import React from "react";
import { useState} from "react";
import { AddTodo } from "./MyComponents/addtodo.js";
import { Header } from "./MyComponents/header.js";
import { Todos } from "./MyComponents/todos.js";
import { Footer } from "./MyComponents/footer.js";
import { Home } from "./Routes/home";
import { About } from "./Routes/about";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  // array holding the todos
  let todosArray = [];

  // todos state
  const [todos, setToDosArray] = useState(updateTodosArray());

  // function to update todosArray from localStorage
  function updateTodosArray() {
    if (localStorage.length) {
      for (let i = 0; i < localStorage.length; i++) {
        const todoItem = localStorage.getItem(localStorage.key(i));
        todosArray.push(JSON.parse(todoItem));
      }
    }
    return todosArray;
  }

  //function to delete a todoitem from todosArray and remove from localStorage
  const deleteTodo = (todoitem) => {
    localStorage.removeItem(`${todoitem.title}`);
    setToDosArray((todos) => todos.filter((ele) => ele !== todoitem));
  };

  //function to add a todoitem to todosArray and remove from localStorage
  const addTodo = (title, description) => {
    localStorage.setItem(title, JSON.stringify({ title: title, description: description }));
    setToDosArray([...todos, { title, description }]);
  };

  return (
    <div className="container-fluid p-0">
      <div className="row">
        <div className="col-12">
          <BrowserRouter>
          <Header title="My Todos List" />
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <AddTodo addTodo={addTodo} />
                    <Todos todos={todos} deleteTodo={deleteTodo} />
                  </>
                }/>
              <Route path="home" element={<Home />} />
              <Route path="about" element={<About />} />
            </Routes>
          <Footer />
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}
export default App;
