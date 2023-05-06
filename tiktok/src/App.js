import './App.css';
import { useState } from 'react';


function App() {
  const [jobs, setJobs] = useState([]);
  const [job, setJob] = useState('');


  const handleAdd = () => {
    setJobs(pre => [...pre, job])
    setJob('');
  }

  return (
    <div className="App">
      <input 
        value={job}
        onChange={(e) => setJob(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>

      <ul>
        {jobs.map((job,index) => <li key={index}>{job}</li>)}
      </ul>
    </div>
  );
}

export default App;
