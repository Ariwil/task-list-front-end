import PropTypes from 'prop-types';
import React from 'react';

import { useState } from 'react';

const INITIAL_FORM_DATA = {
  title: 'New Task',
  isComplete: false,
  description: 'new decription',
};

const NewTaskForm = (props) => {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);

  const handleChange = (e) => {
    const newFormData = {
      ...formData,
      [e.target.name]: e.target.value,
    };
    console.log(newFormData);
    setFormData(newFormData);
  };
  const handleNewTaskSubmit = (e) => {
    e.preventDefault();
    //formData contains the new Bike info that we want to create
    props.addTaskCallbackFunc(formData);
  };

  return (
    <form onSubmit={handleNewTaskSubmit}>
      <label htmlFor="title">Task Title</label>
      <input
        type="text"
        id="title"
        name="title"
        value={formData.title}
        onChange={handleChange}
      />
      <label htmlFor="description">Task Desciption</label>
      <input
        type="text"
        id="desciption"
        name="desciption"
        value={formData.description}
        onChange={handleChange}
      />
      <input type="submit" value="Add task" />
    </form>
  );
};

NewTaskForm.propTypes = {
  addTaskCallbackFunc: PropTypes.func.isRequired,
  title: PropTypes.string,
};

export default NewTaskForm;
