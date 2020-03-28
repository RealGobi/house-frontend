import React, { useState, createContext } from 'react';

export const TaskContext = createContext();

export const TaskProvider = (props) => {

  const [task, setTask] = useState();
  return(
    <TaskContext.Provider value={'jimgwrtgergqergqrgqemy'}>
      {props.children}
    </TaskContext.Provider>
  );
}