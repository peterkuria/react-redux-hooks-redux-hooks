import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux';
import './App.css';
// Components
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';


/**
 * app with hooks
 */
const App = () => (
  <Provider store={store}>
    <div className="main">
      <TaskInput />
      <TaskList />
    </div>
  </Provider>
);

export default App;
