
import {
  USER_LOADING,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCSSES, 
  LOGOUT_SUCSSES,
  LOGIN_FAIL,
  REGISTER_SUCSSES,
  REGISTER_FAIL 
} from '../actions/types';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthentiated: null,
  isLoading: false,
  user: null
}

export default function (state = initialState, action) {
switch (action.type) {
  case USER_LOADING:
    return {
      ...state,
      isLoading: true
    }

  case USER_LOADED:
    return {
      ...state,
      isAuthentiated: true,
      isLoading: false,
      user: action.payload
    }

  case LOGIN_SUCSSES:
  case REGISTER_SUCSSES:
    localStorage.setItem('token', action.payload.token);
    return {
      ...state,
      ...action.payload,
      isAuthentiated: true,
      isLoading: false
    }

  case LOGOUT_SUCSSES:
  case LOGIN_FAIL:
  case REGISTER_FAIL :
  case AUTH_ERROR:

    // remove token
    localStorage.removeItem("token");

    return {
      ...state,
      token: null,
      user: null,
      isAuthentiated: null,
      isLoading: false
    }

  default:
    return state;
}
  
}