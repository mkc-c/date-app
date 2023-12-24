import { useState } from "react";
import "./App.css";

function Counter() {
  const [steps, setSteps] = useState(1);
  const [count, setCount] = useState(0);
  const [date, setDate] = useState(new Date());

  function handleStepDown() {
    setSteps((currentStep) => currentStep - 1);
  }

  function handleStepUp() {
    setSteps((currentStep) => currentStep + 1);
  }

  function handleCountDown() {
    setCount((currentCount) => {
      if (steps === 1) return count - 1;
      else return currentCount - steps;
    });

    setDate(new Date(date.setDate(date.getDate() - 1)));
  }

  function handleCountUp() {
    setCount((currentCount) => {
      if (steps === 1) return count + 1;
      else return currentCount + steps;
    });

    setDate(new Date(date.setDate(date.getDate() + 1)));
  }

  function formattedDate() {
    if (date) return date.toDateString();
  }

  function renderedDate() {
    if (date.toDateString() === new Date().toDateString() || date === 0) {
      return `Today is ${formattedDate()}`;
    } else {
      return `${Math.absolute(count)} days from today is ${formattedDate()}`;
    }
  }

  return (
    <div className="counter">
      <div className="counter__steps">
        <button onClick={handleStepDown}>-</button>
        <span>{steps}</span>
        <button onClick={handleStepUp}>+</button>
      </div>
      <div className="counter__count">
        <button onClick={handleCountDown}>-</button>
        <span>{count}</span>
        <button onClick={handleCountUp}>+</button>
      </div>
      <div className="counter__date">{renderedDate()}</div>
    </div>
  );
}

export default Counter;
