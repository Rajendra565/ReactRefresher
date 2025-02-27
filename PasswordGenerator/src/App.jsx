import { useState } from "react"


function App() {
  const [length,setlength]=useState(8)
  const [numberAllowed,setnumberAllowed]=useState(false)
  const [charAllowed,setcharAllowed]=useState(false)
  const [Password,setpassword]=useState("")

 
  return (
    <>
      <div className="hero" style={{width:"100vw",height:"100vh", backgroundColor:"#414141",display:"flex", justifyContent:"center"}}>
      <h1 style={{marginTop:"10px" , color:"#fff"}}> Password Generator</h1>
      <div className="card">

      </div>

      </div>
    </>
  )
}

export default App
