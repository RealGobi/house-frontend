import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Prototype from 'prop-types';
import { getTasks, deleteTask } from '../actions/taskActions';

const DisplayTask = (props) => {
  const { tasks } = props.task;
  const { deleteTask, getTasks } = props;

DisplayTask.prototype = {
  getTasks: Prototype.func.isRequred,
  deleteTask: Prototype.func,
  task: Prototype.object.isRequred
}

  useEffect(() => {
    getTasks();  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

    // delete
    const deleteClick = (id) => {
      console.log(id);
      deleteTask(id);
    };

  return (
    <div>
      <h3>Tasks</h3>
      <span>{tasks.map((task) => <p onClick={() =>  deleteClick(task.id)} key={task.id}>{task.name}</p> )} </span>
    </div>
  )
}

const mapStateToProps = state => ({
  task: state.task
});

export default connect(mapStateToProps, { getTasks, deleteTask })(DisplayTask);