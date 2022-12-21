import React from 'react';
import TaskList from './components/TaskList.js';
import NewTaskForm from './components/NewTaskForm.js';
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

// const TASKS = [
//   {
//     id: 1,
//     title: 'Mow the lawn',
//     isComplete: false,
//   },
//   {
//     id: 2,
//     title: 'Cook Pasta',
//     isComplete: true,
//   },
// ];

// const [complete, setComplete] = useState(complete.isComplete)

const App = () => {
  // const initialCcopy = [...TASKS];
  const [taskLists, setTaskLists] = useState([]);
  const URL = 'https://task-list-api-c17.herokuapp.com/tasks';

  useEffect(() => {
    axios
      .get(URL)
      .then((res) => {
        //console.log(res);
        const tasksAPIResCopy = res.data.map((task) => {
          return {
            // ...task,
            description: task.description,
            id: task.id,
            isComplete: task.is_complete,
            title: task.title,
          };
        });
        setTaskLists(tasksAPIResCopy);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const updateComplete = (taskId) => {
    const newTaskLists = [];
    axios
      .patch(`${URL}/${taskId}/mark_complete`)
      .then((res) => {
        for (const task of taskLists) {
          console.log('BEFORE', task.isComplete);
          if (task.id === taskId) {
            const newTask = {
              ...task,
              isComplete: true,
            };
            console.log('AFTER', task.isComplete);
            newTaskLists.push(newTask);
          } else {
            newTaskLists.push(task);
          }
        }
        setTaskLists(newTaskLists);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateIncomplete = (taskId) => {
    const newTaskLists = [];
    axios
      .patch(`${URL}/${taskId}/mark_incomplete`)
      .then((res) => {
        for (const task of taskLists) {
          if (task.id === taskId) {
            const newTask = {
              ...task,
              isComplete: false,
            };
            newTaskLists.push(newTask);
          } else {
            newTaskLists.push(task);
          }
        }
        setTaskLists(newTaskLists);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const deleteTask = (taskId) => {
    axios
      .delete(`${URL}/${taskId}`)
      .then(() => {
        let newTaskLists = [];
        for (const task of taskLists) {
          if (task.id !== taskId) {
            newTaskLists.push(task);
          }
        }
        setTaskLists(newTaskLists);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addTask = (newTaskInfo) => {
    axios
      .post(URL, newTaskInfo)
      .then((response) => {
        // console.log(response);
        //fetchAllBikes();  //<- This helper function will make a .get() call to fetch all bikes and update the state variable to display them
        const newTasks = [...taskLists];
        const newTaskJSON = {
          ...newTaskInfo,
          id: response.data.task.id,
          key: response.data.task.id,
        };
        // console.log(response.data.task.id);
        newTasks.push(newTaskJSON);
        setTaskLists(newTasks); //this method does not require a .get request; we are pushing the bike data to the bikes list and using the setter to trigger a rerender.
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        <div>
          {
            <TaskList
              tasks={taskLists}
              updateComplete={updateComplete}
              updateIncomplete={updateIncomplete}
              deleteTask={deleteTask}
            />
          }
          <NewTaskForm tasks={taskLists} addTaskCallbackFunc={addTask} />
        </div>
      </main>
    </div>
  );
};

export default App;
