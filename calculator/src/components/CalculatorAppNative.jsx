import React, { useState } from "react";
import "./App.css";

const CalculatorAppNative = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const isOperator = (char) => ["+", "-", "*", "/"].includes(char);

  const calculate = (expression) => {
    let operands = [];
    let operators = [];

    // Tokenize the expression
    const tokens = expression.match(/\d+|\+|-|\*|\//g) || [];

    tokens.forEach((token) => {
      if (!isNaN(token)) {
        operands.push(parseFloat(token));
      } else if (isOperator(token)) {
        while (
          operators.length > 0 &&
          precedence(operators[operators.length - 1]) >= precedence(token)
        ) {
          performOperation(operands, operators);
        }
        operators.push(token);
      }
    });

    while (operators.length > 0) {
      performOperation(operands, operators);
    }

    return operands[0].toString();
  };

  const precedence = (operator) => {
    if (operator === "+" || operator === "-") {
      return 1;
    } else if (operator === "*" || operator === "/") {
      return 2;
    }
    return 0;
  };

  const performOperation = (operands, operators) => {
    const operator = operators.pop();
    const b = operands.pop();
    const a = operands.pop();
    switch (operator) {
      case "+":
        operands.push(a + b);
        break;
      case "-":
        operands.push(a - b);
        break;
      case "*":
        operands.push(a * b);
        break;
      case "/":
        operands.push(a / b);
        break;
      default:
        break;
    }
  };

  const handleClick = (value) => {
    if (value === "=") {
      const expressionResult = calculate(input);
      setResult(expressionResult);
    } else if (value === "C") {
      setInput("");
      setResult("");
    } else {
      setInput((prevInput) => prevInput + value);
    }
  };

  return (
    <div className="calculator">
      <input type="text" value={input} readOnly />
      <div className="buttons">
        {[7, 8, 9, "+", 4, 5, 6, "-", 1, 2, 3, "*", 0, "/", "=", "C"].map(
          (button) => (
            <button key={button} onClick={() => handleClick(button)}>
              {button}
            </button>
          )
        )}
      </div>
      <div className="result">{result}</div>
    </div>
  );
};

export default CalculatorAppNative;
