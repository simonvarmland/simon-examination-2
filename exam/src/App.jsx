import { useState } from "react"
import "./App.css"

function App() {
  const [todo, setTodo] = useState([
    { id: 1, text: "Handla", done: false },
    { id: 2, text: "Tvätta", done: false },
    { id: 3, text: "Städa", done: false },
  ]);

  const [draft, setDraft] = useState("");

  function handleAdd(e) {
    const text = draft.trim();
    
    if (text === "") {
      return;
    }

    setTodo([...todo, { id: Date.now(), text: text, done: false }]);
    setDraft("");
  }

  function handleChange(e){
    setDraft(e.target.value);
  }

  function handleRemove(id) {
    const newList = todo.filter((todo) => todo.id !== id);

    setTodo(newList);
  }

  return (

    <main>
        <h1>Todo</h1>
        <input
        value={draft}
        onChange={handleChange} 
        placeholder="Skriv här"></input>
        <button type="button"
        onClick={handleAdd}
        >Lägg till</button>
        <ul>
          {todo.map((todo) => (<li key={todo.id} className={todo.done ? "todo done-todo" : "todo"} ><input type="checkbox" />{todo.text} <button type="button"
        onClick={() => handleRemove(todo.id)}
        >Ta bort</button></li>))}
        </ul>
      
    </main>
  );

}

export default App