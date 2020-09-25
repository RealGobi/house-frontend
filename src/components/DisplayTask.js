import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { deleteTask } from '../actions/taskActions';
import store from '../store';
import '../App.css';
import './DisplayTask.css';
import arrow from '../assets/Arrow-down.png';


const DisplayTask = ({task, index, admin}) => {

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
       <div className="title">{task.title}<span className="inducator">{isOpen ? <img src={arrow} alt='arrow up' id='closeArrow' /> : <img src={arrow} alt='arrow down' id='openArrow' />}</span></div>    
      { isOpen && (
        <div>
          <div className="step">{task.step}</div>    
          <div className="description">{task.description}</div> 
          {/*
          if admin, edit and delete option.
          */}
          {admin && (
            <span id="deleteTask" onClick={() => deleteClick(task._id)}><button type="button" className="btn btn-outline-danger">Delete</button></span> 
          )}
        </div>
      )}
  </div>
  
)
}


export default DisplayTask;