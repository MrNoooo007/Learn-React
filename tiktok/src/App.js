import './App.css';
import { useState } from 'react';
import Content from './Content';


function App() {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  }
  console.log(show);
  return (
    <div className="App">
      <button onClick={handleShow}>Show / Hide</button>
      { show && <Content/> }
    </div>
  );
}

export default App;
