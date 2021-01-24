import React from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutMe } from '../../actions/authActions';


const Logout = (props) => {
  const history = useHistory();
  const out = () => {
    history.push('/');
  };
  return (
    <button className="logout" type="button" onClick={() => { props.logoutMe(); out(); }} href="#">
       Logga ut
    </button>
  );

};


export default connect(null, { logoutMe })(Logout);
