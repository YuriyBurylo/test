import { useState } from 'react';
import './App.css';
import Name from './Name';
import Picture from './Picture';


function App() {
const [toggle, setShow] = useState(false);
  return (
    <div className="App">
      <div>
        {toggle ? <Name/> : <Picture/>}
      </div>
      <button onClick={() => setShow(!toggle)}>{toggle ? "Show me Photo" : "Show me Name"}</button>
    </div>
  );
}

export default App;
