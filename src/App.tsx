import { useState } from "react";

import "./App.css";

let name: any = "Midhun";
let age: number | string = 5;
let isStudent: boolean;
let hobbies: string[];
let role: [number, string];

// Function type
// let printName1: (name: string) => void;

// function printName(name: string) {
//   console.log(name);
// }
// printName("mk");

// Object Type
// type Person = {
//   name: string;
//   age?: number;
// };

// let person: Person = {
//   name: "Midhun",
//   // age: 33
// };

// let person2: Person[] = [];

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">Hello World</div>
    </>
  );
}

export default App;
