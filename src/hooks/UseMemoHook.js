import React, { useState, useMemo } from 'react';

const UseMemoHook = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const heavyFunction = useMemo(() => handleComplexLoop(count), [count])

  const handleCount = () => {
    setCount((c)=> c+1)
  }

  const handleTodo = () => {
    setTodos((t) => [...t, "New Todo"]);
  }
  
  return (
    <>
      Count: {count}  
      <br/>
      <h5>This will take time always as it render the heavy function-</h5>
      <br/>
      <button onClick={handleCount}>Increment</button>
      <ul>
        {todos.map((todo,index) => <li key={index}>{todo}</li>)}
      </ul>
        <br/>

      <button onClick={handleTodo}>Add todo</button>
             <h5>But now todo runs quickly as it is not rendering heavy function due to useMemo hook</h5>
      <h2>Heavy Function</h2>
      {heavyFunction}
    </>
  );
}

const handleComplexLoop = (num) => {
  for (let i = 0; i < 1000000000; i++) {
    num+=1
  }
  return num;
}

export default UseMemoHook
