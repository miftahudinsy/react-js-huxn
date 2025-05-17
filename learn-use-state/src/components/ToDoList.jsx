import { useState } from "react";

const ToDoList = () => {
  const [task, setTask] = useState([]);
  const [taskInput, setTaskInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskInput.trim()) {
      setTask([...task, taskInput]);
      setTaskInput("");
    }
  };

  const handleChange = (e) => {
    setTaskInput(e.target.value);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={taskInput}
          onChange={handleChange}
          placeholder="Add a new Todo"
        />
        <button type="submit">Add Todo</button>
      </form>

      <ul>
        {task.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
