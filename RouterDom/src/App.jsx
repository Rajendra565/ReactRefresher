import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from "./Home"
import About from './About'

function App() {
  return (
    <div>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/About' element={<About></About>}></Route>
      
    </Routes>
  </BrowserRouter>
      
    </div>
  )
}

export default App
