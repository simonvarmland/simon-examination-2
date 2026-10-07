function TodoItem(props) {
  return (
    <li
      className={props.todo.done ? "todo done-todo" : "todo"}
    >
      <input
        type="checkbox"
        checked={props.todo.done}
        onChange={() => props.onToggle(props.todo.id)}
      />

      <span className="todo-text">
        {props.todo.text}
      </span>

      <button
        type="button"
        onClick={() => props.onRemove(props.todo.id)}
      >
        Ta bort
      </button>
    </li>
  );
}

export default TodoItem;