import React, { useState, createContext } from 'react';
import axios from 'axios';

export const TaskContext = createContext();

export const TaskProvider = (props) => {

  const [task, setTask] = useState();
  const URL = 'http://localhost:4000';

  axios.get(URL + '/task')
  .then(res => {
    const tasks = res.data;
    setTask(tasks)
    });

  return(
    <TaskContext.Provider value={task}>
      {props.children}
    </TaskContext.Provider>
  );
}