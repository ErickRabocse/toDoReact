import { useState } from "react";
import "./app.css";
import ToDoItem from "./components/ToDoItem";

function App() {
  const [taskToDo, setTaskToDo] = useState("");
  const [list, setList] = useState([]);

  function handleClick() {
    if (!taskToDo) {
      alert("Type a task");
      return;
    }

    const item = {
      id: Math.floor(Math.random() * 1000),
      value: taskToDo,
    };

    setList((oldItems) => [...oldItems, item]);
    setTaskToDo("");
  }

  function deleteItem(id) {
    const newArr = list.filter((item) => item.id !== id);
    setList(newArr);
  }

  return (
    <>
      <ul id="list">
        {list.map((el) => (
          <li className="list-item" key={el.id}>
            <ToDoItem task={el.value} id={el.id} handleDelete={deleteItem} />
          </li>
        ))}
      </ul>

      <div id="new-todo-form">
        <label htmlFor="todo-input">New to do</label>
        <input
          type="text"
          placeholder="Type a task"
          value={taskToDo}
          onChange={(e) => setTaskToDo(e.target.value)}
        />
        <button onClick={() => handleClick()}>Add</button>
      </div>
    </>
  );
}

export default App;
