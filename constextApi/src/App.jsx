import { useState } from 'react'

import './App.css'
import Navbar from './Navbar'
import context from './Context';


function App() {
  const [count, setCount] = useState(0)
  
  let name = "rajendra";
  let age = 21;
  function incr(){
    setCount(count+1)
  }
  return (
   <div>

       <button onClick={()=>setCount(count+1)}>button{count}</button> 
      {/* <Text name={name} /> */}
     <context.Provider value={{name,age,count,setCount, incr}}  >
       <Navbar/>
     
    </context.Provider>
   </div>
  )
}

export default App
