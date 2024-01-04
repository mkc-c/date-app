import { useState } from "react";

function Counter() {
  const [steps, setSteps] = useState(1);
  const [count, setCount] = useState(0);
  // const [date, setDate] = useState(new Date());

  const date = new Date();
  date.setDate(date.getDate() + count);

  function handleStepDown() {
    setSteps((currentStep) => currentStep - 1);
  }

  function handleStepUp() {
    setSteps((currentStep) => currentStep + 1);
  }

  function handleCountDown() {
    setCount((prevCount) => prevCount - steps);
  }

  function handleCountUp() {
    setCount((prevCount) => prevCount + steps);
  }

  function formattedDate() {
    return date.toDateString();
  }

  function renderedDate() {
    if (date.toDateString() === new Date().toDateString() || date === 0) {
      return `Today is ${formattedDate()}`;
    } else {
      return `${Math.abs(count)} day${
        Math.abs(count) !== 1 ? "s" : ""
      } from today is ${formattedDate()}`;
    }
  }

  return (
    <div className="counter">
      <div className="counter__steps">
        <button onClick={handleStepDown}>-</button>
        <span>Step: {steps}</span>
        <button onClick={handleStepUp}>+</button>
      </div>
      <div className="counter__count">
        <button onClick={handleCountDown}>-</button>
        <span>Count: {count}</span>
        <button onClick={handleCountUp}>+</button>
      </div>
      <div className="counter__date">{renderedDate()}</div>
    </div>
  );
}

export default Counter;
