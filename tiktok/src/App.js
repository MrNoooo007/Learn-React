import './App.css';
import {useCallback, useState} from 'react';
import Content from './Content';


function App() {
  const [count, setCount] = useState(0);

  const handleIncrease = useCallback(() => {
      setCount(pre => pre + 1);
  }, [])

  return (
    <div className="App">
      <h1>{ count }</h1>
      <Content
        onIncrease={handleIncrease}
      />
    </div>
  );
}

export default App;
