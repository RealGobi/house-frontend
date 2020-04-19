import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {getTasks} from '../actions/taskActions';

const Dashboard = (props) => {
  const { tasks } = props.task;

  useEffect(() => {
    getTasks();  
  }, []);

  return (
    <div>
      <h1>Dashboard comp</h1>
      <span>{tasks.map((task, idx) => <p key={idx}>{task.name}</p> )} </span>
    </div>
  )
}

const mapStateToProps = state => ({
  task: state.task
});

export default connect(mapStateToProps, { getTasks})(Dashboard);