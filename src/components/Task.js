import React from 'react';
import PropTypes from 'prop-types';

import './Task.css';

const Task = (props) => {
  // const [complete, setComplete] = useState(props.isComplete);

  const updateComplete = props.updateComplete;
  const taskId = props.id;
  const deleteTask = props.deleteTask;
  const buttonClass = props.isComplete ? 'tasks__item__toggle--completed' : '';
  return (
    <li className="tasks__item">
      <button
        className={`${buttonClass} tasks__item__toggle `}
        onClick={() => updateComplete(taskId)}
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
  deleteTask: PropTypes.func.isRequired,
};

export default Task;
