import React from 'react';
import PropTypes from 'prop-types';

import './Task.css';

const Task = (props) => {
  // const [complete, setComplete] = useState(props.isComplete);

  const updateComplete = props.updateComplete;
  const updateIncomplete = props.updateIncomplete;
  const taskId = props.id;
  const deleteTask = props.deleteTask;
  const completeStatus = props.isComplete;

  const toggleComplete = (taskId) => {
    if (completeStatus === true) {
      updateComplete(taskId);
    } else {
      updateIncomplete(taskId);
    }
  };

  const buttonClass = props.isComplete ? 'tasks__item__toggle--completed' : '';
  return (
    <li className="tasks__item">
      <button
        className={`${buttonClass} tasks__item__toggle `}
        onClick={() => toggleComplete(taskId)}
      >
        {props.title}
      </button>
      <button
        className="tasks__item__remove button"
        onClick={() => deleteTask(taskId)}
      >
        x
      </button>
    </li>
  );
};

Task.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,
  updateComplete: PropTypes.func.isRequired,
  updateIncomplete: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
};

export default Task;
