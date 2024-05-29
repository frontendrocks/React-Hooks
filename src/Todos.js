import React, {memo} from 'react'

const Todos = ({ todos, addTodos }) => {
    console.log("Todos Called");
  return (
      <div>
     <ul>
        {todos.map((todo,index) => <li key={index}>{todo}</li>)}
      </ul>
      <button onClick={addTodos}>Add Todo</button>
    </div>
  )
}

export default memo(Todos)
