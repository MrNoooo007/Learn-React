import './App.css';
import { useState } from 'react';

const courses = [
  {
    id: 1,
    name: "HTML"
  },
  {
    id: 2,
    name: "CSS"
  },
  {
    id: 3,
    name: "JS"
  }
]


function App() {
  const [name, setName] = useState('');
  const [checked, setChecked] = useState(1);

  function handleRadio() {
    console.log(checked);
  }

  return (
    <div className="App">

      {/* Two-ay binding for input  */}
      <input 
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h1>{ name }</h1> 

      {courses.map(course =>       
        <div key={course.id}> 
          <input 
            type='radio' 
            checked={course.id === checked}
            onChange={(e) => setChecked(course.id)} 
          /> { course.name }
        </div>  
      )}

      <button onClick={handleRadio}>Sumit</button>
    </div>
  );
}

export default App;
