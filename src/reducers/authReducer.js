
import {
  USER_LOADING,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS, 
  LOGOUT_SUCCESS,
  LOGIN_FAIL,
  REGISTER_SUCCESS,
  REGISTER_FAIL
} from '../actions/types';

const initialState = {
  token: localStorage.getItem('token'),
  street: localStorage.getItem('street'),
  isAuthenticated: false,
  isLoading: false,
  user: null
}
console.log(initialState);
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
      isAuthenticated: true,
      isLoading: false,
      user: action.payload.user
    }

  case LOGIN_SUCCESS:
  case REGISTER_SUCCESS:
    localStorage.setItem('token', action.payload.token);
    localStorage.setItem('street', action.payload.user.street);
    return {
      ...state,
      ...action.payload,
      isAuthenticated: true,
      isLoading: false
    }

  case LOGOUT_SUCCESS:
  case LOGIN_FAIL:
  case REGISTER_FAIL :
  case AUTH_ERROR:

    // remove token
    localStorage.removeItem("token");
    localStorage.removeItem("street");

    return {
      ...state,
      street:null,
      token: null,
      user: null,
      isAuthenticated: false,
      isLoading: false,
    }

  default:
    return state;
}
  
}