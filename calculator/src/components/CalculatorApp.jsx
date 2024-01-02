import React, { useState } from "react";
// import "./App.css";
import "../App.css";

const CalculatorApp = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    if (value === "=") {
      try {
        setResult(eval(input).toString());
      } catch (error) {
        setResult("Error");
      }
    } else if (value === "C") {
      setInput("");
      setResult("");
    } else {
      setInput((prevInput) => prevInput + value);
    }
  };

  return (
    <div className="calculator">
      <h1>React Calculator</h1>
      <input type="text" value={input} readOnly />
      <div className="result">{result}</div>
      <div className="buttons">
        {[7, 8, 9, "+", 4, 5, 6, "-", 1, 2, 3, "*", 0, "/", "=", "C"].map(
          (button) => (
            <button key={button} onClick={() => handleClick(button)}>
              {button}
            </button>
          )
        )}
      </div>
      {/* <div className="result">{result}</div> */}
    </div>
  );
};

export default CalculatorApp;
