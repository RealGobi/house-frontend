import React, {useContext} from 'react';
import { TaskContext } from '../context/TaskContext';

export default function Dashboard() {
  const task = useContext(TaskContext);
console.log(task);

  
  return (
    <div className="col">
      <h1>Dashboard comp</h1>
      <div>

      </div>
    </div>
  )
}
