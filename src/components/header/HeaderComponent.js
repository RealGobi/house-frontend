import React from 'react';
import './header.css';

export default function HeaderComponent() {
  const street = 'Legendvägen 36'
  return (
    <div className="header">
      <h1 className="street">{street}</h1>
    </div>
  )
}
