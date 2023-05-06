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
  const [checked, setChecked] = useState([]);

  function handleRadio() {
    console.log(checked);
  }

  function handleCheck(id) {
    setChecked(pre => {
      const isChecked = checked.includes(id);
      if(isChecked) {
        return checked.filter(check => check != id);
      }
      else {
        return [...pre,id]
      }
    })
  }
  console.log(checked);

  return (
    <div className="App">

      {/* Two-ay binding for input  */}
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h1>{name}</h1>

      {/* Two-way binding for radio */}
      {/* {courses.map(course =>
        <div key={course.id}>
          <input
            type='radio'
            checked={course.id === checked}
            onChange={(e) => setChecked(course.id)}
          /> {course.name}
        </div>
      )} */}

      {courses.map(course =>
        <div key={course.id}>
          <input
            type='checkbox'
            checked={checked.includes(course.id)}
            onChange={() => handleCheck(course.id)}
          /> {course.name}
        </div>
      )}

      <button>Sumit</button>
    </div>
  );
}

export default App;
