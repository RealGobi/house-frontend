import { GET_TASKS, ADD_TASK, DELETE_TASK, LOADING_TASK } from '../actions/types';

const initialState = {
  tasks: [],
  loading: false
}

export default function (state = initialState, action) {
  switch(action.type){
    case GET_TASKS:
      return {
        ...state,
        tasks: action.payload,
        loading: false
      }
    case ADD_TASK:
      return {
        ...state,
        tasks: [action.payload, ...state.tasks]
      }
    case DELETE_TASK:
      console.log('in reducer');

      return {
        ...state,
        tasks: state.tasks.filter(task => task._id !== action.payload)
      }
    case LOADING_TASK:
      return {
        ...state,
        loading: true,
      }
      default:
        return state;
  }
}