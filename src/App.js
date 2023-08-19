import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Slider />
      {}
    </div>
  );
}

function Slider() {
  const [date, setDate] = useState(new Date().toDateString());
  const [value, setValue] = useState(1);

  const [steps, setSteps] = useState(1);

  function handleChange(e) {
    setValue(parseInt(e.target.value, 10));
  }

  function clickHandleUp() {
    setSteps((prev) => prev + value);
    let currentDate = new Date(date);
    currentDate.setDate(currentDate.getDate() + value);
    setDate(currentDate.toDateString());
  }
  function clickHandleDown() {
    setSteps((prev) => prev - value);
    let currentDate = new Date(date);
    currentDate.setDate(currentDate.getDate() - value);
    setDate(currentDate.toDateString());
  }

  return (
    <div>
      <div className="slider">
        <input
          type="range"
          min="0"
          max="10"
          value={value}
          onChange={(e) => handleChange(e)}
        />
        <span>{value}</span>
      </div>
      <div className="input">
        <button onClick={clickHandleDown}>-</button>
        <input type="number" value={steps} />
        <button onClick={clickHandleUp}>+</button>
      </div>

      <div>
        {steps} days from Today is {date}
      </div>
    </div>
  );
}
