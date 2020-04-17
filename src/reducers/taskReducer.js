import { GET_TASKS, ADD_TASK, DELETE_TASK } from '../actions/types';

const initialState = {
  tasks: [
    {name: 'GRÄVA'},
    {name: 'SKRUVA'},
    {name: 'GRÅTA'}
  ]
}

export default function (state = initialState, actions) {
  switch(actions.type){
    case GET_TASKS:
      return {
        ...state
      }
      default:
        return state;
  }
}