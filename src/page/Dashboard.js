import React, { useEffect } from 'react';
import DisplayTask from '../components/DisplayTask';
import { connect } from 'react-redux';
import { getTasks } from '../actions/taskActions';
import store from '../store';

const Dashboard = (getState) => {
const { tasks } = getState.task;
console.log(tasks);

useEffect(() => {
  store.dispatch(getTasks());
   
// eslint-disable-next-line react-hooks/exhaustive-deps
}, []);

  return (
    <div>
      <h1>Dashboard comp</h1>
      <DisplayTask tasks={tasks} />
    </div>
  )
}

const mapStateToProps = state => ({
  task: state.task
});
export default connect( mapStateToProps, { getTasks } )(Dashboard);
