import { useState } from "react";

import "./App.css";
import InputFeild from "./components/InputFeild";
import type { Todo } from "./components/model";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
<<<<<<< HEAD

  function handleAdd(e: React.SyntheticEvent) {
    e.preventDefault();
  }
=======
>>>>>>> 4c3c0ff0421c48af018dedb34e6cae7e0e648e4d

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputFeild todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
    </div>
  );
};

export default App;
