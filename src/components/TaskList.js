import React from 'react';
import PropTypes from 'prop-types';
import Task from './Task';
import './TaskList.css';

const TaskList = (props) => {
  const getTaskListJSX = (tasks) => {
    return tasks.map((task) => {
      return (
        <Task
          key={task.id}
          id={task.id}
          title={task.title}
          isComplete={task.isComplete}
          updateComplete={props.updateComplete} //idk if this works
          updateIncomplete={props.updateIncomplete}
          deleteTask={props.deleteTask}
        />
      );
    });
  };
  return (
    <ul className="tasks__list no-bullet">{getTaskListJSX(props.tasks)}</ul>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      isComplete: PropTypes.bool.isRequired,
    })
  ),
  updateComplete: PropTypes.func.isRequired,
  updateIncomplete: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
};

export default TaskList;
