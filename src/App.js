import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import  HeaderComponent  from './components/HeaderComponent';
import Auth from './page/Auth';
import  Dashboard  from './page/Dashboard';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function App() {
  return (
    <Router>
      <HeaderComponent></HeaderComponent>
      <Route path="/" exact component={Auth} />
      <Route path="/dashboard" component={Dashboard} />
    </Router>
  );
}

export default App;
