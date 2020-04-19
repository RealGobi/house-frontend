import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';
import HeaderComponent from './components/header/HeaderComponent';
import Auth from './page/Auth';
import Dashboard  from './page/Dashboard';
import PostTask from './page/PostTask';
import Stats from './page/Stats';

import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <HeaderComponent></HeaderComponent>
        <Route path="/" exact component={Auth} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/post-task" component={PostTask} />
        <Route path="/stats" component={Stats} />
        </Router>
      </Provider>
      );
    }
      // <Route path="/task:id" component={Task} />

export default App;
