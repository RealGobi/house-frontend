import { GET_TASKS, ADD_TASK, DELETE_TASK, LOADING_TASK } from './types';
import axios from 'axios';

export const getTasks = () => dispatch => {  
  dispatch(setLoading());
  axios
  .get('http://localhost:5000/task')
  .then(res => 
    dispatch({
      type: GET_TASKS,
      payload: res.data
    })
    );
}

export const addTask = (task) => dispatch => {  
  axios
  .post('http://localhost:5000/task/add', task)
  .then( res => dispatch({
    type: ADD_TASK,
    payload: res.data
  })

  )
}

export const deleteTask = (id) => {  

  return {
    type: DELETE_TASK,
    payload: id
  }
}

export const addTask = (task) => {  

  return {
    type: ADD_TASK,
    payload: task
  }
}

export const setLoading = () => {  

  return {
    type: LOADING_TASK
  }
}