// src/TodoApp.js
import React, { useState, useEffect } from 'react';
import './Todo.css';

function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(savedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { name: newTask.trim(), completed: false }]);
      setNewTask('');
    }
  };

  const editTask = (index, newName) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, name: newName } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const completedTasks = tasks.filter(task => task.completed).length;

  return (
    <div className='contai'>
      <div className="container">
      <div className="header-todo">
        <div className="header-main">
          <h1>Task Done</h1>
          <p className="header-item">Keep it up</p>
        </div>
        <div className="progress">
          <div id="progress-text" className="progress-text">{completedTasks}/{tasks.length}</div>
        </div>
      </div>
      <div className="todo-input">
        <input
          type="text"
          id="new-task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Write your next task"
        />
        <button id="add-task" onClick={addTask}>
          <i className="fa-solid fa-plus fa-spin"></i>
        </button>
      </div>
      <div className="tasks" id="tasks">
        {tasks.map((task, index) => (
          <div key={index} className={`task ${task.completed ? 'completed' : ''}`}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTaskCompletion(index)}
            />
            <span className="task-name">{task.name}</span>
            <button className="edit" onClick={() => {
              const newName = prompt('Edit task name:', task.name);
              if (newName !== null) editTask(index, newName);
            }}>
              <i className="fa-regular fa-pen-to-square"></i>
            </button>
            <button className="delete" onClick={() => deleteTask(index)}>
              <i className="fa-regular fa-trash-can"></i>
            </button>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default TodoApp;
