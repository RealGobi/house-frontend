import React, { useState, useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {registration} from '../../actions/authActions';
import './auth.css';
import config from '../../config/default.json';
import { clearErrors } from '../../actions/errorActions';
import { useHistory } from 'react-router-dom';

const Registration = (props) => {
  const history = useHistory();

  Registration.propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    registration : PropTypes.func.isRequired,
    clearErrors : PropTypes.func,
  };

  Registration.defaultProps = {
    isAuthenticated: false,
  };

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [enterdCode, setEnterdCode] = useState('');
  const [street, setStreet] = useState('');
  const [err, setErr] = useState('');
  
  const validate = () => {
    if(!name || !email || !password || !street){
      setErr('Fyll i alla fält.');
      console.log(err);
      return false;
    }
    return true;
  }

  const submitHandler = useCallback((e) => {

    e.preventDefault();
    const inviteCode = config.code;

    if (enterdCode !== inviteCode){
      return setErr('Ingen giltlig inbjudningskod');
    }
    const isValid = validate();

    if(isValid) {
      // Create user object
      const newUser = {
        name,
        email,
        password,
        street,
      };

      // Attempt to register
      props.registration(newUser);
  
      console.log(name, email, password, enterdCode, street);

      // push user to path -- need of better solution --

      setTimeout(() => {
        history.push('/taskReel');
      }, 250);

      // reset
      setName('');
      setEmail('');
      setPassword('');
      setEnterdCode('');
      setStreet('');
      setErr('');
      props.clearErrors();
    }
  });

  useEffect(() => {
    if (props.error.id === 'REGISTER_FAIL') {
      setErr(props.error.msg.msg);
    }
  }, [submitHandler]);

  return (
    <div className="content">
      <form onSubmit={submitHandler}>
        <h2>Registrering</h2>
        <label htmlFor="name">Name:</label>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
        <label htmlFor="Email">Email:</label>
        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <label htmlFor="Password">Password:</label>
        <input type="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <label htmlFor="steet">Gatunamn:</label>
        <input type="text" value={street} onChange={(e)=>setStreet(e.target.value)} />
        <label htmlFor="code">Inbjudningskod:</label>
        <input type="password" value={enterdCode} onChange={(e)=>setEnterdCode(e.target.value)}/>
        <button>Registrera</button>
        <div style={{height:'18px'}}>{err && <p style={{fontSize:'18px', color:'red'}}>{err}</p>}</div>
      </form>
    </div>
  )
}


const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error
});
export default connect( mapStateToProps, { registration, clearErrors } )(Registration);
 
