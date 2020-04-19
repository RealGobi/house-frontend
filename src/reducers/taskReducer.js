import { GET_TASKS, ADD_TASK, DELETE_TASK } from '../actions/types';

const initialState = {
  tasks: [
    {name: 'GRÄVA', id: 1},
    {name: 'SKRUVA', id: 2},
    {name: 'GRÅTA', id: 3}
  ]
}

export default function (state = initialState, action) {
  switch(action.type){
    case GET_TASKS:
      return {
        ...state
      }
    case DELETE_TASK:
      console.log('delete');
      
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload)
      }
      default:
        return state;
  }
}