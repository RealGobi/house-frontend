import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

export default function HeaderComponent() {
  const street = 'Legendvägen 36'
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link to="/dashboard" className="navbar-brand" >
      {street}
    </Link>
      <div className="collpase nav-collpase">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
            <Link to="/dashboard" className="nav-link">Dashboard</Link>
          </li>
          <li className="navbar-item">
            <Link to="/stats" className="nav-link">Stats</Link>
          </li>
          <li className="navbar-item">
            <Link to="/post-task" className="nav-link">Task</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
