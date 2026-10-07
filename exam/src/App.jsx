import { useState } from "react";
import "./App.css";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Handla", done: false },
    { id: 2, text: "Tvätta", done: false },
    { id: 3, text: "Städa", done: false },
  ]);

  const [draft, setDraft] = useState("");

  function handleAdd() {
    const text = draft.trim();

    if (text === "") {
      return;
    }

    setTodos([
      ...todos,
      { id: Date.now(), text: text, done: false },
    ]);

    setDraft("");
  }

  function handleChange(e) {
    setDraft(e.target.value);
  }

  function handleRemove(id) {
    setTodos(
      todos.filter((todo) => todo.id !== id)
    );
  }

  function handleToggle(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, done: !todo.done }
          : todo
      )
    );
  }

  return (
    <main className="app">
      <section className="todo-card">

        <img
          className="logo"
          src="/img/bocka-av-logo.png"
          alt="Bocka av"
        />

        <TodoForm
          draft={draft}
          onChange={handleChange}
          onAdd={handleAdd}
        />

        <ul>
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={handleToggle}
              onRemove={handleRemove}
            />
          ))}
        </ul>

      </section>
    </main>
  );
}

export default App;