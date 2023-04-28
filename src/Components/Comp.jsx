import React from 'react'
import {useSelector } from 'react-redux'
import { increment } from '../Reduxtoolkit./Counter'
import { decrement } from '../Reduxtoolkit./Counter'
import { reset } from '../Reduxtoolkit./Counter'
import { useDispatch } from 'react-redux'
const Comp=() => {
const count=useSelector((store)=>store.data.counter)
console.log(count)

const dispatch =useDispatch();




  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>dispatch(increment(1))}>Increse</button>
      <button onClick={()=>dispatch(decrement())}>Decrease</button> 
      <button onClick={()=>dispatch(reset())}>Reset</button> 
    </div>
  )
}

export default Comp