import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getTasks, deleteTask } from '../actions/taskActions';
import store from '../store';


const DisplayTask = (getState) => {
  const [item, setTasks] = useState('');
  const { tasks } = getState.task;
  setTasks(tasks);
  // const { tasks } = props.task;
  // const { deleteTask, getTasks } = props;

DisplayTask.propTypes = {
  getTasks: PropTypes.func.isRequired,
  deleteTask: PropTypes.func,
  task: PropTypes.object.isRequired
}


  useEffect(() => {
    console.log('here');
    store.dispatch(getTasks());
     
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

    // delete
    const deleteClick = (id) => {
      console.log(id);
      deleteTask(id);
    };

    const hej = () => {
      console.log(tasks, '<--');

    }

  return (
    <div>
      <h3>Tasks</h3>
      <button onClick={hej()}>click me!</button>
      <span>{item.map((task) => <p onClick={() =>  deleteClick(task.id)} key={task._id}>{task.name}</p> )} </span>
    </div>
  )
}

const mapStateToProps = state => ({
  task: state.task
});

export default connect(mapStateToProps, { getTasks, deleteTask })(DisplayTask);