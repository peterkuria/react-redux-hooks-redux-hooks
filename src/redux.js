import { createStore } from 'redux';
import uuid from 'uuid/v4';

const initialState = {
  tasks: [
    {
      id: uuid(),
      name: 'Read a bit',
      complete: true
    },
    {
      id: uuid(),
      name: 'Do laundry',
      complete: false
    }
  ]
};

export const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
// Reducer
function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        tasks: [...state.tasks, action.payload]
      };
    case 'TOGGLE_TASK':
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload
            ? { ...task, complete: !task.complete }
            : task
        )
      };
    case 'DELETE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload)
      };
    default:
      return state;
  }
}
// Actions
export const addTaskAction = (task) => ({
  type: 'ADD_TASK',
  payload: task
});

export const toggleTaskComplete = (taskId) => ({
  type: 'TOGGLE_TASK',
  payload: taskId
});

export const deleteTaskAction = (taskId) => ({
  type: 'DELETE_TASK',
  payload: taskId
});
