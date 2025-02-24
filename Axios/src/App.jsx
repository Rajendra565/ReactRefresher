import './App.css'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [item,setitem]=useState([])
  useEffect(()=>{
   const view=(()=>{

 
      axios.get('/data.json')
      .then((res)=>{
        setitem(res.data);
        console.log(res.data)
      }).catch((err)=>{
        console.log(err)
      })


    })
    view()
  },[])
 
  return (
    <div className='allcard' >
      {item.map((val)=>{
       return (<>
       
        <article className="cta">
          <img src={val.image} alt='Bluetit'/>
          <div className="cta__text-column">
            <h2>Aspect ratio is great</h2>
            <p>This image has an aspect ratio of 3/2.</p>
            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio">Read all about it</a>
          </div>
        </article>


  
       
       </>)
      })}
    </div>
  )   
}

export default App
