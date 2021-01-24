import { GET_TASKS, ADD_TASK, DELETE_TASK, LOADING_TASK } from './types';
import axios from 'axios';
import { tokenConfig } from './authActions';
import { returnErrors } from './errorActions';

export const getTasks = () => (dispatch)  => {  
  dispatch(setLoading());
  axios
  .get('http://localhost:5000/task')
  .then(res => 
    dispatch({
      type: GET_TASKS,
      payload: res.data
    }))
    .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}

export const addTask = (task) => (dispatch, getState) => {  
  axios
  .post('http://localhost:5000/task/add', task, tokenConfig(getState))
  .then( res => dispatch({
    type: ADD_TASK,
    payload: res.data
  }))
  .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}


export const deleteTask = (id) => (dispatch, getState) => {  
  console.log('in action');
  
  axios
  .delete(`http://localhost:5000/task/delete/${id}`, tokenConfig(getState))
  .then(res =>
    dispatch({
      type: DELETE_TASK,
      payload: id
    }))
    .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}

export const setLoading = () => {  

  return {
    type: LOADING_TASK
  }
}