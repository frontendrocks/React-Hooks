import React, { useContext } from 'react'
import { counterContext } from '../hooks/UseContext'

const ChildA = () => {
    const {counter, setCounter} = useContext(counterContext)
  return (
    <>
          <h3>Counter in Child {counter}</h3>
          Handle Counter Global State in side Child A component <br />
          
          <button onClick={()=> setCounter((c)=> c+1)}>Increment in Side Child</button>
    </>
  )
}

export default ChildA
