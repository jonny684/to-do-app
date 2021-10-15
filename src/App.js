import './App.css';
import TheForm from './components/form'
import Thelist from './components/todolist';
import { useState } from 'react';

function App() {

  const [inputText, setInputtext] = useState("");
  const [todos , setTodo ] = useState([]);


  return (
    <div className="App">
      <header className="App-header">
        <h1> My to do List </h1>
      </header>
      <TheForm setInputtext={setInputtext} setTodo={setTodo} todos={todos} inputText={inputText}/>
      <Thelist todos={todos} setTodo={setTodo} />
    </div>
  );
}

export default App;
