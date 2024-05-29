import React, { useLayoutEffect, useState, useEffect } from 'react'

const UseLayout = () => {
    const [num, setNum] = useState(0)

    // useEffect(() => {
    //     if (num === 0) {
    //        setNum(5+ Math.random() * 50)
    //    }
    // }, [num])

      useLayoutEffect(() => {
        if (num === 0) {
           setNum(5+ Math.random() * 50)
       }
    }, [num])
  return (
    <div>
          Print Number : 
          {num}
          <button onClick={()=> setNum(0)} >Click</button>
    </div>
  )
}

export default UseLayout
