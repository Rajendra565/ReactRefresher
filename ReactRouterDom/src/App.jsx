import React from 'react'
import Home from './Home'
import About from './About';
import Fedback from './Fedback';
import { BrowserRouter, Route, Routes } from "react-router";


function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/fedback' element={<Fedback></Fedback>}></Route>
      </Routes>
    </BrowserRouter>
    
      
    </div>
  )
}

export default App
