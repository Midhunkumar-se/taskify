import { useState } from "react";

import "./App.css";

let name = "Midhun";
let age = 5;
let isStudent: boolean;
let hobbies: string[];
let role: [number, string];

type Person = {
  name: string;
  age?: number;
};

let person: Person = {
  name: "Midhun",
  // age: 33
};

let person2: Person[] = [];

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">Hello World</div>
    </>
  );
}

export default App;
