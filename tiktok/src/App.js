import './App.css';

import Home from './pages/Home'
import Contact from './pages/Contact'
import { Routes, Route, Link } from 'react-router-dom'

function App() {


  return (
    <div className="App">
      <nav>
        <ul>
          <li>Home</li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
          <li>
            <Link to='/home'>Home</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;
