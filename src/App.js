import { useState } from 'react';
import './App.css';
import ChildA from './components/ChildA';
import ChildB from './components/ChildB';
import { counterContext } from './hooks/UseContext';
// import UseMemoHook from './hooks/UseMemoHook';
// import UseCallBack from './hooks/UseCallBack';
// import UseLayout from './hooks/UseLayout';
// use context also use for global state to change

function App() {
 
  const [counter, setCounter] = useState(0)

  const incrementHandler = () => {
    setCounter((c) => c + 1);
  }

   const decrementHandler = () => {
    setCounter((c) => c - 1);
  }

  return (
    <>
      <h2> Parent App</h2>
      Counter Value : {counter}
      <br /><br />
      <button onClick={incrementHandler}>Increment</button>&nbsp;<button onClick={decrementHandler}>Decrement</button>

      <br /><br /><br />
      <counterContext.Provider value={{counter,setCounter}}>
        Child 1 : <ChildA />
        <br />
         Child2 :<br />
        <ChildB />
       </counterContext.Provider>
     </>
    //  <UseMemoHook />
    // <UseCallBack />
    // <UseLayout />
  

   )
  
}

export default App;




