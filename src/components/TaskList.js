import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTaskComplete, deleteTaskAction } from '../redux';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  // Get dispatch
  const dispatch = useDispatch();
  // Set reference functions by wrapping action creators with dispatch
  // (using this instread of useActions since that's been removed)
  const toggleTask = (taskId) => dispatch(toggleTaskComplete(taskId));
  const deleteTask = (taskId) => dispatch(deleteTaskAction(taskId));

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li key={task.id}>
          <input
            type="checkbox"
            checked={task.complete}
            onChange={toggleTask.bind(null, task.id)}
          />
          <span className={task.complete ? 'complete' : null}>{task.name}</span>
          <span
            className="delete-button"
            onClick={deleteTask.bind(null, task.id)}
          >
            X
          </span>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
