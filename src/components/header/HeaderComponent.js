import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import Logout from '../auth/Logout';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const HeaderComponent = (props) => {
 const bg = '#ccc';
 HeaderComponent.propTypes = {
   auth : PropTypes.object.isRequired
  };
  
  const { isAuthenticated, user } = props.auth;
 
  return (
    <>
    { isAuthenticated &&
      <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: bg}}>
    <Link style={{textDecoration:"none"}} to="/taskReel" className="street" >
      {user.street}
    </Link>
      <div className="collpase nav-collpase">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
            <Link to="/taskReel" className="nav-link margin">Renoveringar</Link>
          </li>
        {/*<li className="navbar-item">
            <Link to="/stats" className="nav-link">Stats</Link>
          </li> */}
          <li className="navbar-item">
            <Link to="/post-task" className="nav-link">Lägg till</Link>
          </li>
        </ul>
      </div>
          <div className="logout-placement">
             <Logout /> 
          </div>
    </nav>
    }
  </>
  )
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, null) (HeaderComponent);
