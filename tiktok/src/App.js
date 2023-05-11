import './App.css';
import {useReducer} from 'react';

// init state
const initState = 0;

// Actions
const UP_ACTION = 'up'
const DOWN_ACTION = 'down'

// Init Reducer
const reducer = (state, action) => {
  switch (action){
    case UP_ACTION:
      return state + 1;
    case DOWN_ACTION:
      return state - 1;  
    default:
      throw Error('action valid !')  
  } 
}



function App() {

  const [count, dispatch] = useReducer(reducer,initState);

  return (
    <div className="App">
      <h1>{count}</h1>

      <button onClick={() => {dispatch(UP_ACTION)}}>up</button>
      <button onClick={() => {dispatch(DOWN_ACTION)}}>down</button>
    </div>
  );
}

export default App;
