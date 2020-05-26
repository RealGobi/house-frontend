import React, { useEffect, useState } from 'react';
import DisplayTask from '../components/DisplayTask';
import { connect } from 'react-redux';
import { getTasks } from '../actions/taskActions';
import store from '../store';

const Dashboard = (getState) => {
const { tasks } = getState.task;
console.log(tasks);
const [locTask, setTask] = useState([])
useEffect(() => {
  store.dispatch(getTasks());
   setTask(tasks);
// eslint-disable-next-line react-hooks/exhaustive-deps
}, []);

const toggleTask = index => {
  setTask(locTask.map((task, i) => {
    if (i === index) {
      console.log(index);
      
      task.open = !task.open
    } else {
      task.open = false;
    }

    return task;
  }))
}


  return (
    <div>
      <h1>Dashboard comp</h1>
      <span className="task">
      {
        tasks.map((task, i) => (
          <div key={i}>
            <DisplayTask task={task} index={i} toggleTask={toggleTask} />
          </div>
        ))
      }
      </span>
    </div>
  )
}

const mapStateToProps = state => ({
  task: state.task
});
export default connect( mapStateToProps, { getTasks } )(Dashboard);
