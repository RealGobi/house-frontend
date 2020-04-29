import React from 'react';
import PropTypes from 'prop-types';
import { deleteTask } from '../actions/taskActions';


const DisplayTask = (task) => {

  DisplayTask.propTypes = {
  deleteTask: PropTypes.func,
  task: PropTypes.object
}

    // delete
    const deleteClick = (id) => {
      console.log(id);
      deleteTask(id);
    };

    

  return (
    <div>
      <h3>Tasks</h3>
      <span>{task.tasks.map((t) => <p onClick={() =>  deleteClick(t._id)} key={t._id}>{t.title}</p> )} </span>
    </div>
  )
}



export default DisplayTask;