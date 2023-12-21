import './App.css';
import { useState } from "react";

function App() {

  const [numbr, setNumbr] = useState(1);
  const increaseNumbr = () => {
    setNumbr(numbr + 1);
  }

  const decreaseNumbr = () => {
    setNumbr(numbr - 1);
  }

  return (
    <div className='App'>
      <div className='Numbr'>
        <h2> {numbr} </h2>
      </div>
      <div className='Btn'>
        <button onClick={increaseNumbr}> Increase Number </button>
        <button onClick={decreaseNumbr}> Decrease Number </button>
      </div>
    </div>
  );
}

export default App;
