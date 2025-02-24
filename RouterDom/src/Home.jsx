import React from 'react'
import {Link} from 'react-router-dom'



function Home() {
  return (
    <div>
    <h1>Home this is page</h1>
    <Link to={"./About"}>About</Link>
      
    </div>
  )
}

export default Home
