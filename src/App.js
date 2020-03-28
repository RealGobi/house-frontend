import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import HeaderComponent from './components/header/HeaderComponent';
import Auth from './page/Auth';
import Dashboard  from './page/Dashboard';
import Task from './page/Task';
import Stats from './page/Stats';
import { TaskProvider } from './context/TaskContext';

import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function App() {
  return (
    <TaskProvider>
      <Router>
        <HeaderComponent></HeaderComponent>
        <Route path="/" exact component={Auth} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/task:id" component={Task} />
        <Route path="/task" component={Task} />
        <Route path="/stats" component={Stats} />
      </Router>
    </TaskProvider>
  );
}

export default App;
