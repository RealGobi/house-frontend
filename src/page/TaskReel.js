import React, { useEffect, useState } from 'react';
import DisplayTask from '../components/DisplayTask';
import { connect } from 'react-redux';
import { getTasks } from '../actions/taskActions';
import { useHistory } from 'react-router-dom';

import store from '../store';

const TaskReel = (getState) => {
  const history = useHistory();

  // if user relods page, push back to /
  if(!getState.user) {
    history.push("/");
  }

const { tasks } = getState.task;
const [locTask, setTask] = useState([]);
const [admin, setAdmin] = useState(true);

useEffect(() => {
  store.dispatch(getTasks());
  setTask(tasks);
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, []);


const filterdTasks = tasks.filter(task => task.addedBy === getState.user.id); 

const sortedByDate = filterdTasks.sort((a, b) => {
    var c = new Date(a.createdAt);
    var d = new Date(b.createdAt);

    // new first 
    return d-c;
});

return (
    <div>
      <span className="task">
      { sortedByDate.length !== 0 ?
      sortedByDate.map((task, i) => (
          <div key={i}>
            <DisplayTask task={task} index={i} admin={admin} />
          </div>
        ))
        : <p style={{textAlign:"center"}}>Här var det tomt, tryck lägg till för att börja. </p>
      }
      </span>
    </div>
  )
}

const mapStateToProps = state => ({
  task: state.task,
  user: state.auth.user
});
export default connect( mapStateToProps, { getTasks } )(TaskReel);
