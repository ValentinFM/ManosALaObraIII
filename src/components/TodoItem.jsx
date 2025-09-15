function TodoItem({ id, text, completed, deleteTask, toggleTaskCompleted }) {
  return (
    <li>
      <label
        style={{
          textDecoration: completed ? "line-through" : "none",
        }}
      >
      <input type="checkbox" checked={completed} onChange={() => toggleTaskCompleted(id)}/>
      <span className={completed ? "completed" : ""}>{text}</span>
      </label>
      <button className="delete-button" onClick={()=> deleteTask(id)}>🗑️</button>
    </li>
  );
}

export default TodoItem;
