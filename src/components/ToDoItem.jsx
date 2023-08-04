import "../app.css";
const ToDoItem = ({ task, id, handleDelete }) => {
  return (
    <>
      <label className="list-item-label" htmlFor="toDoTask">
        <input type="checkbox" name="toDoTask" data-list-item-checkbox />
        <span data-list-item-text>{task}</span>
        <button data-button-delete onClick={() => handleDelete(id)}>
          Delete
        </button>
      </label>
    </>
  );
};

export default ToDoItem;
