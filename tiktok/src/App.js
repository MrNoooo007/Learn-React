import './App.css';
import {useRef, useState} from 'react';
import Content from './Content';


function App() {
  const [count, setCount] = useState(60);
  let timerId = useRef();

  const handleStartCount = () => {
    timerId.current = setInterval(() => {
      setCount(pre => pre + 1)
    },1000)
  }

  const handleStopCount = () => {
    clearInterval(timerId.current)
  }

  return (
    <div className="App">
      <h1>{ count }</h1>
      <button onClick={handleStartCount}>Start</button>
      <button onClick={handleStopCount}>Stop</button>
    </div>
  );
}

export default App;
