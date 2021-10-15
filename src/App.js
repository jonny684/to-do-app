import './App.css';
import TheForm from './components/form'
import Thelist from './components/todolist';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> My to do List</h1>
      </header>
      <TheForm/>
      <Thelist/>
    </div>
  );
}

export default App;
