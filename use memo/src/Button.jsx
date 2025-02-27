import React from 'react'
import { useContext } from 'react'
import context from './context'

function Button() {
  const value=useContext(context)
  return (
    <div>
    {value.name}{value.age}
      
    </div>
  )
}

export default Button
