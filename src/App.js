import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import  HeaderComponent  from './components/HeaderComponent';
import Auth from './page/Auth';
import  Dashboard  from './page/Dashboard';
import Task from './page/Task';
import Stats from './page/Stats';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function App() {
  return (
    <Router>
      <HeaderComponent></HeaderComponent>
      <Route path="/" exact component={Auth} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/task" component={Task} />
      <Route path="/stats" component={Stats} />
    </Router>
  );
}

export default App;
