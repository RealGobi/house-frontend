import { compose, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer';

const initiakState = {};

const middleware = [thunk];

const store = createStore(rootReducer, initiakState, compose(applyMiddleware(...middleware), 
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));


export default store;
