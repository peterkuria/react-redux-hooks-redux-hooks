import React, { useState } from 'react';
import uuid from 'uuid/v4';
import { addTaskAction } from '../redux';
import { useDispatch } from 'react-redux';

const TaskInput = () => {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();
  const addTask = (task) => dispatch(addTaskAction(task));

  const onChange = (event) => {
    setTask(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (task.trim() === '') return;
    addTask({
      id: uuid(),
      name: task,
      complete: false
    });
    setTask('');
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="form-div">
        <input
          type="text"
          name="task"
          placeholder="Add a task"
          value={task}
          onChange={onChange}
        />
        <button type="submit">Add</button>
      </div>
    </form>
  );
};

export default TaskInput;
