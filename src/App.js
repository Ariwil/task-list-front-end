import React from 'react';
import TaskList from './components/TaskList.js';
import './App.css';
import { useState } from 'react';

const TASKS = [
  {
    id: 1,
    title: 'Mow the lawn',
    isComplete: false,
  },
  {
    id: 2,
    title: 'Cook Pasta',
    isComplete: true,
  },
];

// const [complete, setComplete] = useState(complete.isComplete)

const App = () => {
  const initialCcopy = [...TASKS];
  const [taskLists, setTaskLists] = useState(initialCcopy);

  const updateComplete = (taskId) => {
    const newTaskLists = [];

    for (const task of initialCcopy) {
      if (task.id === taskId) {
        if (task.isComplete !== true) {
          task.isComplete = false;
        } else {
          task.isComplete = true;
        }
        taskLists.push(task);
      }
    }
    setTaskLists(newTaskLists);
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        <div>
          {<TaskList tasks={taskLists} updateComplete={updateComplete} />}
        </div>
      </main>
    </div>
  );
};

export default App;
