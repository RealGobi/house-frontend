import React from 'react'
import { Link } from 'react-router-dom';


export default function HeaderComponent() {
  return (
    <div>
      <Link to="/"><button className="btn btn-primary">Login</button></Link>
      <Link to="/dashboard"><button className="btn btn-primary">Dashboard</button></Link> 
    </div>
  )
}
