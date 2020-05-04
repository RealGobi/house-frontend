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
  <div>
  <h3>Tasks</h3>
  <div className={'accordion' + (task.open ? 'open' : '')}>
    {task.tasks.map((t) => <span onClick={() =>  deleteClick(t._id)} key={t._id}>
    <p>{t.title}</p>
    <p>{t.step}</p>
    <p>{t.description}</p>
    </span>
    )} 
    </div>
  </div>
)
}


export default DisplayTask;