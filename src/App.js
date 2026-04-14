import React, { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;
    setTodos([...todos, { text: task, completed: false }]);
    setTask("");
  };

  const deleteTask = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const toggleComplete = (index) => {
    const updated = [...todos];
    updated[index].completed = !updated[index].completed;
    setTodos(updated);
  };

  return (
    <div className="app">
      <div className="card">
        <h1>✨ My Todo App</h1>

        <div className="inputBox">
          <input
            type="text"
            placeholder="Enter your task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button onClick={addTask}>Add</button>
        </div>

        <ul>
          {todos.map((todo, index) => (
            <li key={index} className="todoItem">
              <span
                className={todo.completed ? "completed" : ""}
                onClick={() => toggleComplete(index)}
              >
                {todo.text}
              </span>

              <button onClick={() => deleteTask(index)}>🗑</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;