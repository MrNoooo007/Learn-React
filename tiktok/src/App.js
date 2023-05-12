import './App.css';
import {useReducer} from 'react';

// init state
const initState = {
  job: '',
  jobs: []
};

// Actions
const SET_JOB = 'set_job'
const ADD_JOB = 'add_job'
const DELETE_JOB = 'delete_job'

const setJob = (payload) => {
  console.log(payload);
  return {
    type: SET_JOB,
    payload 
  }
}


// Init Reducer
const reducer = (state, action) => {
  switch(action.type) {
    case SET_JOB:
      return {
        ...state,
        job: action.payload
      }
  }
}



function App() {

  const [state, dispatch] = useReducer(reducer,initState);
  const { jobs, job } = state;

  return (
    <div className="App">
      <h3>To do</h3>
      <input
        value={job} 
        placeholder='enter something'
        onChange={(e) => {
          dispatch(setJob(e.target.value))
        }}
      />
      <button>Add</button>
      <ul>
      {jobs.map(job => (
        <li key={job}>{job}</li>
      ))}
      </ul>
    </div>
  );
}

export default App;
