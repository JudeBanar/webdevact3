import './App.css';
import { useState } from "react";

function App() {

  const [numbr, setNumbr] = useState(0);

  const increaseNumbr = () => {
    setNumbr(numbr + 1);
  }

  const decreaseNumbr = () => {
    setNumbr(numbr - 1);
  }

  const resetNumbr = () => {
    setNumbr(0)
  }

  return (
    <div className='App'>
      <div className='Numbr'>
        <h2> {numbr} </h2>
      </div>
      <div className='Btn'>
        <button onClick={increaseNumbr}> Increase Number </button>
        <button onClick={decreaseNumbr}> Decrease Number </button>
        <button onClick={resetNumbr}> Reset Number </button>
      </div>
    </div>
  );
}

export default App;
