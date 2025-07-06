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
      <button onClick={() => setShow(!toggle)}>Toggle</button>
    </div>
  );
}

export default App;
