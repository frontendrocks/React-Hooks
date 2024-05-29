import React, { useCallback, useState } from 'react'
import Todos from '../Todos';

const UseCallBack = () => {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);

    const handleCount = () => {
        setCount((c) => c+1);
    }

    const handleTodos = useCallback(()=>setTodos((t) => [...t, "New Todo"]), [])

  return (
      <div>
          Count: {count}
          <br/>
          <button onClick={handleCount}>Count</button>
          <br />
      <Todos todos={todos} addTodos={handleTodos} />
    </div>
  )
}

export default UseCallBack
