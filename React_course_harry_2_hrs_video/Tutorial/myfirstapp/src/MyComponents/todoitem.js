import React from 'react'

export const Todoitem = (props) => {
  return (
      <div>
          <div>
            {props.todoarrelementobject.sno}<br />          
            {props.todoarrelementobject.title}<br/>
            {props.todoarrelementobject.description}<br/>
            <button>delete</button>
          </div>    
      </div>
      
  )
}
