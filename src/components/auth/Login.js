import React, { useState, useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { login  } from '../../actions/authActions';
import './auth.css';
import { clearErrors } from '../../actions/errorActions';
import { useHistory } from 'react-router-dom';

const Login = (props) => {
  Login.propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    login : PropTypes.func.isRequired,
    clearErrors : PropTypes.func,
  };
  console.log(props.getState);

  const [email, setEmail] = useState('swe@gmail.com');
  const [password, setPassword] = useState('123');
  const [err, setErr] = useState('');
  const history = useHistory();


  const submitHandler = useCallback((e) => {

    e.preventDefault();



    // user object
    const user = {
      email,
      password,
    };

    // Attempt to login
    props.login(user);
    // reset
    setEmail('');
    setPassword('');
    setErr('');
    props.clearErrors();

      history.push('/dashboard');
    console.log('to start', props);
  }, [props, email, password, history]);

  useEffect(() => {
    if (props.error.id === 'LOGIN_FAIL') {
      setErr(props.error.msg.msg);
    }
    if (props.isAuthenticated) {
      history.push('/dashboard');
    }
  }, [submitHandler, props, history]); 

  return (
    <div className="content">
      <form onSubmit={submitHandler}>
        <h2>Logga in</h2>
        <label htmlFor="Email">Email:</label>
        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <label htmlFor="Password">Password:</label>
        <input type="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
      <button>Logga in</button>
        <div style={{height:'18px'}}>{err && <p style={{fontSize:'18px', color:'red'}}>{err}</p>}</div>
      </form>
    </div>
  )
}


const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error
});
export default connect( mapStateToProps, { login, clearErrors } )(Login);
 
