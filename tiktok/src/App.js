import './App.css';
import { useState } from 'react'

function App() {
  const [counter, setCounter] = useState(1);
  const [msg, setMessage] = useState('');

  const handleClick = () => {
    setCounter(counter + 1);
    console.log(counter);
  }

  return (
    <div className="App">
    <h1>
      { counter }
    </h1>
    <button onClick={handleClick}>++</button>

    <input 
      type='text'
      value={msg}
      onChange={(e) => setMessage(e.target.value)}
    />

    <h1> { msg } </h1>
    </div>
  );
}

export default App;
