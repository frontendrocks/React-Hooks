import React, { useContext } from 'react'
import { counterContext } from '../hooks/UseContext'

const ChildB = () => {
    const {counter, setCounter} = useContext(counterContext);
  return (
    <>
              <h3>Counter in Child {counter}</h3>
          Handle Counter Global State in side Child B component <br />
          
          <button onClick={()=> setCounter((c)=> c-1)}>Decrement in Side Child</button>
    </>
  )
}

export default ChildB
