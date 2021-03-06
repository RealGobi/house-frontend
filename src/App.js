import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import HeaderComponent from './components/header/HeaderComponent';
import Auth from './page/Auth';
import TaskReel  from './page/TaskReel';
import PostTask from './page/PostTask';
import MyDocument from './page/MyDocument';
// import Stats from './page/Stats';
import store from './store';

import { loadUser } from './actions/authActions';

import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function App() {


  // see if user valid token is present
  useEffect(() => {
    store.dispatch(loadUser());
    
  }, []);
  

  return (
      <Router>
        <HeaderComponent />
        <Route path="/" exact render={() => <Auth />} />
        <Route path="/taskReel" component={TaskReel} />
        <Route path="/post-task" component={PostTask} />
        <Route path="/document" component={MyDocument} />
        {/* <Route path="/stats" component={Stats} />  */}
        </Router>
      );
    }
      // <Route path="/task:id" component={Task} />

      export default App;
