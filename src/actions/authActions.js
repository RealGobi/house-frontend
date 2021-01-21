import axios from 'axios';
import {returnErrors} from './errorActions';

import {
  USER_LOADING,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCSSES, 
  LOGOUT_SUCSSES,
  LOGIN_FAIL,
  REGISTER_SUCSSES,
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
  dispatch(returnErrors(err.response.data, err.response.status));
  dispatch({
    type: AUTH_ERROR
  });
});
};

export const tokenConfig = getState => {
  // get token
  const token = getState().auth.token;

  // add headers
  const config = {
    headers: {
      "Content-type": "application/json"
    }
  }

  // token?, add to headers

  if(token){
    config.headers["a-auth-token"] = token;
  }

  return config; 
}