import React, { useState } from 'react';

const Registration = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(name, email, password);
  }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <label htmlFor="name">Name:</label>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
        <label htmlFor="Email">Email:</label>
        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <label htmlFor="Password">Password:</label>
        <input type="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <button>Registrera</button>
      </form>
    </div>
  )
}

export default Registration
