import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

export default function HeaderComponent() {
  const street = 'Legendvägen 36'
  const bg = '#ccc'
  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: bg}}>
    <Link style={{textDecoration:"none"}} to="/dashboard" className="street" >
      {street}
    </Link>
      <div className="collpase nav-collpase">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
            <Link to="/dashboard" className="nav-link margin">Renoveringar</Link>
          </li>
{/*           <li className="navbar-item">
            <Link to="/stats" className="nav-link">Stats</Link>
          </li> */}
          <li className="navbar-item">
            <Link to="/post-task" className="nav-link">Lägg till</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
