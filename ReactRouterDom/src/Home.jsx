import React from 'react'
import { Link} from 'react-router'

function Home() {
  return (
    <div>
    <h1>I am home page1</h1>
    <Link to={"./About"}>About</Link>
    <Link to={"./Fedback"}>fedback</Link>
    
      
    </div>
  )
}

export default Home
