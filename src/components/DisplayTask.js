import React from 'react';
import PropTypes from 'prop-types';
import { deleteTask } from '../actions/taskActions';
import store from '../store';


const DisplayTask = (task) => {

  DisplayTask.propTypes = {
  deleteTask: PropTypes.func,
  task: PropTypes.object
}

// delete
const deleteClick = (id) => {
  console.log('component');
  store.dispatch(deleteTask(id));
  ;
};

    

return (
  
  <div className={'accordion' + (task.open ? 'open' : '')}>
    <p>{task.task.title}</p>    
  </div>
  
)
}


export default DisplayTask;