import axios from 'axios';
import {returnErrors} from './errorActions';

import {
  USER_LOADING,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS, 
  LOGOUT_SUCCESS,
  LOGIN_FAIL,
  REGISTER_SUCCESS,
  REGISTER_FAIL
} from './types';

// token? - load user

export const loadUser = () => (dispatch, getState) => {  
  dispatch({type: USER_LOADING});

axios
.get('http://localhost:5000/auth/user', tokenConfig(getState))
.then(res =>
  dispatch({
    type: USER_LOADED,
    payload: res.data
  })
)
.catch(err => {
  console.log(err);
  dispatch(returnErrors(err.response));
  dispatch({
    type: AUTH_ERROR
  });
});
};

// registration

export const registration = ({name, email, password, street}) => dispatch => {
//headers
const config = {
  headers: {
    "Content-type": "application/json"
  }
}

// body
const body = JSON.stringify({name, email, password, street});

axios.post('http://localhost:5000/user', body, config)
.then(res=>dispatch({
  type: REGISTER_SUCCESS,
  payload: res.data
}))
.catch(err => {
  dispatch(returnErrors(err.response.data, err.response.status, 'REGISTER_FAIL'));
  dispatch({
    type: REGISTER_FAIL
  });
});
}

// login

export const login = ({email, password}) => dispatch => {
//headers
const config = {
  headers: {
    "Content-type": "application/json"
  }
}

// body
const body = JSON.stringify({email, password});

axios.post('http://localhost:5000/auth', body, config)
.then(res=>dispatch({
  type: LOGIN_SUCCESS,
  payload: res.data
}))
.catch(err => {
  dispatch(returnErrors(err.response.data, err.response.status, 'LOGIN_FAIL'));
  dispatch({
    type: LOGIN_FAIL
  });
});
}

// Logout

export const logoutMe = () => {
   return{
     type: LOGOUT_SUCCESS
   } 
  }

export const tokenConfig = getState => {
  // get token
  const token = getState().auth.token;

  // add headers
  const config = {
    headers: {
      "Content-type": "'multipart/form-data'"
    }
  }

  // token?, add to headers

  if(token){
    config.headers["x-auth-token"] = token;
  }

  return config; 
}