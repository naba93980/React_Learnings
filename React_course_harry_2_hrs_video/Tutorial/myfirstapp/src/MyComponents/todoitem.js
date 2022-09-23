import React, { useEffect } from "react";

export function Todoitem(props) {
  // const Delete = (e) => {
  //   console.log(e.target.offsetParent);
  //   e.target.offsetParent.hidden = true;
  // }

  const del = () => {
    props.deleteTodo(props.item);
  };

  return (
    <>
      <div className="col-auto">
        {<h2>{props.item.sno}</h2>}
        {<p>{props.item.title}</p>}
        {<p>{props.item.description}</p>}
        {
          <button onClick={del} type="button" className="btn btn-danger">
            Delete
          </button>
        }
      </div>
    </>
  );
}
