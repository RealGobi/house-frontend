import React from 'react';
import PropTypes from 'prop-types';
import { deleteTask } from '../actions/taskActions';
import store from '../store';
import '../App.css';


const DisplayTask = ({task, index, toggleTask}) => {

  DisplayTask.propTypes = {
  deleteTask: PropTypes.func,
  toggleTask: PropTypes.func,
  task: PropTypes.object
}

// delete
const deleteClick = (id) => {
  console.log('component');
  store.dispatch(deleteTask(id));
  ;
};

    

return (
  
  <div className={'accordion ' + (task.open ? 'open' : '')} 
       key={index} 
       onClick={() => toggleTask(index)}>

      <div className="title">{task.title}</div>    
      <div className="step">{task.step}</div>    
      <div className="description">{task.description}</div>    
  </div>
  
)
}


export default DisplayTask;