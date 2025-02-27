import React from 'react'
import { useContext } from 'react'
import context from './context'

function Text() {
  const counter=useContext(context)
  return (
    <div>
    this is counter{counter}
    
      
    </div>
  )
}

export default Text
