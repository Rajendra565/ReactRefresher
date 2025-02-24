import { useState } from 'react'

import './App.css'

function App() {
  const [color, setColor] = useState("#414141")

  return (
    <>
    <div className="hero" style={{backgroundColor:color,width:"100%",height:"100vh",display:'flex',alignItems:"end",justifyContent:"center",paddingBottom:"10%"}}>

    <div className="btns" style={{display:"flex",gap:"3px", backgroundColor:"#fff",minWidth:"fit", padding:"5px", boxShadow:"10px 10px 10px #414141"}}>
      <button className='' style={{padding:"15px", borderRadius:"10px",backgroundColor:"red", color:"#fff",fontSize:"20px",border:"2px solid #fff"}} onClick={()=>setColor("red")}>Red</button>
      <button className='' style={{padding:"15px", borderRadius:"10px",backgroundColor:"green", color:"#fff",fontSize:"20px",border:"2px solid #fff"}} onClick={()=>setColor("green")}>green</button>
      <button className='' style={{padding:"15px", borderRadius:"10px",backgroundColor:"gray", color:"#fff",fontSize:"20px",border:"2px solid #fff"}} onClick={()=>setColor("gray")}>gray</button>
      <button className='' style={{padding:"15px", borderRadius:"10px",backgroundColor:"olive", color:"#fff",fontSize:"20px",border:"2px solid #fff"}} onClick={()=>setColor("olive")}>olive</button>
      <button className='' style={{padding:"15px", borderRadius:"10px",backgroundColor:"salmon", color:"#fff",fontSize:"20px",border:"2px solid #fff"}} onClick={()=>setColor("salmon")}>salmon</button>
      <button className='' style={{padding:"15px", borderRadius:"10px",backgroundColor:"gold", color:"#fff",fontSize:"20px",border:"2px solid #fff"}} onClick={()=>setColor("gold")}>gold</button>
      <button className='' style={{padding:"15px", borderRadius:"10px",backgroundColor:"black", color:"#fff",fontSize:"20px",border:"2px solid #fff"}} onClick={()=>setColor("black")}>black</button>
      <button className='' style={{padding:"15px", borderRadius:"10px",backgroundColor:"blue", color:"#fff",fontSize:"20px",border:"2px solid #fff"}} onClick={()=>setColor("blue")}>blue</button>
    </div>
    </div>

    </>
  )
}

export default App
