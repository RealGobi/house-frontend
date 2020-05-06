import React from 'react';
import PropTypes from 'prop-types';
import { deleteTask } from '../actions/taskActions';
import store from '../store';
import './DisplayTask.scss';


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
    <p className="title">{task.task.title}</p>    
    <p className="step">{task.task.step}</p>    
    <p className="description">{task.task.description}</p>    
  </div>
  
)
}


export default DisplayTask;