import React from 'react'
import { useContext } from 'react'
import context from './Context'
function Text() {
  const {name,age,count,setCount}=useContext(context)
  return (
    <div>
      <h1>{name}{age}{count}</h1>
      <button onClick={()=>setCount((count)=>count+1)}>Click me{count}</button>
    </div>
  )
}

export default Text
