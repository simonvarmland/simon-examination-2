function TodoForm(props) {
  return (
    <div className="input-row">
      <input
        value={props.draft}
        onChange={props.onChange}
        placeholder="Skriv här"
      />

      <button
        type="button"
        onClick={props.onAdd}
      >
        Lägg till
      </button>
    </div>
  );
}

export default TodoForm;