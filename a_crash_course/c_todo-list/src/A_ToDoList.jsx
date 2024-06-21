import { useState } from 'react';

function ToDoList() {

  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState(["Break Fast Order","Making Grocery List","Insurance Renew"]);

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const deleteTask = (idx) => {
    setTasks(tasks.filter((_, index) => index !== idx));
  };

  const moveTaskUp = (idx) => {
    if (idx > 0) {
      const newTasks = [...tasks];
      [newTasks[idx - 1], newTasks[idx]] = [newTasks[idx], newTasks[idx - 1]];
      setTasks(newTasks);
    }
  };

  const moveTaskDown = (idx) => {
    if (idx < tasks.length - 1) {
      const newTasks = [...tasks];
      [newTasks[idx + 1], newTasks[idx]] = [newTasks[idx], newTasks[idx + 1]];
      setTasks(newTasks);
    }
  };

  return (
    <div className="to-do-list">
      <h1>To-Do List</h1>
      <div className="add-task-row">
        <input
          type="text"
          placeholder="Add New Task"
          value={newTask}
          onChange={handleInputChange}
          className="add-task-input"
        />
        <button onClick={addTask} className="add-button">Add Task</button>
      </div>
      <ol className="task-rows">
        {tasks.map((task, idx) => (
          <li className="task-row" key={idx}>
            <span className="task-text">{task}</span>
            <div>
              <button className="delete-button" onClick={() => deleteTask(idx)}>Delete</button>
              <button className="move-button" onClick={() => moveTaskUp(idx)}>👆🏼</button>
              <button className="move-button" onClick={() => {moveTaskDown(idx)}}>👇🏽</button>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ToDoList;
