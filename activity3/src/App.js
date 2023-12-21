import './App.css';
import { useState } from "react";

function App() {

  const [numbr, setNumbr] = useState(1);
  const increaseNumbr = () => {
    setNumbr(numbr + 1);
  }

  return (
    <div className='App'>
      <div className='Nmbr'>
        <h2> {numbr} </h2>
      </div>
      <div className='Btn'>
        <button onClick={increaseNumbr}> Increase Number </button>
      </div>
    </div>
  );
}

export default App;
