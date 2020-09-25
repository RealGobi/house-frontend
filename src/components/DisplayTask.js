import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { deleteTask } from '../actions/taskActions';
import store from '../store';
import '../App.css';
import './DisplayTask.css';


const DisplayTask = ({task, index, toggleTask}) => {

const [isOpen, setIsOpen] = useState(false);

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

    
    

return (
  
  <div className={'accordion ' + (task.open ? 'open' : 'false')} 
       key={index} 
       onClick={() => setIsOpen(!isOpen) }>
      { isOpen && (
        <div>
          <div className="title">{task.title}</div>    
          <div className="step">{task.step}</div>    
          <div className="description">{task.description}</div> 
          <span id="deleteTask" onClick={() => deleteClick(task._id)}>X</span> 
        </div>
      )}
  </div>
  
)
}


export default DisplayTask;