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
  console.log('id', id);
  store.dispatch(deleteTask(id));
  ;
};

    console.log(task.open, 'öppen?');
    console.log(task);
    
    

return (
  
  <div className={'accordion ' + (task.open ? 'open' : '')} 
       key={index} 
       onClick={() => console.log(task)}>

      <div className="title">{task.title}</div>    
      <div className="step">{task.step}</div>    
      <div className="description">{task.description}</div> 
      <span id="deleteTask" onClick={() => deleteClick(task._id)}>x</span>   
  </div>
  
)
}


export default DisplayTask;