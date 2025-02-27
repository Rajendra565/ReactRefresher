import React from 'react'
import { context } from 'react'
import { useContext } from 'react'
import Text from './Text'

function Button() {
// let {name,age}=useContext(context)
//   let newCOntext = useContext(context)
  return (
    <div>
      <Text/>
     {/* <h1> {name}{age}</h1> */}
    </div>
  )
}

export default Button
