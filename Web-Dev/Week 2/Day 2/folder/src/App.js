import React, {useState} from 'react';
import './App.css';

function App() {
  const [toggle, setToggle] = useState(true);
  return (
    <div className="display">
      <h1>Home</h1>
      {toggle ? (
        <div>
          <li>file 1</li>
          <li>file 2</li>
          <li>file 3</li>
        </div>
      ):(<div></div>)}
      <br></br>
      <button onClick={()=>setToggle(!toggle)}>Toggle</button>
    </div>
  );
}

export default App;
