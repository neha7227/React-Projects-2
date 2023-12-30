import React, { useState } from "react";
import styles from "../components/Calculator.module.css";

export default function Calculator({}) {
  // return (
  //   <div>
  //     <h1>React Calculator</h1>
  //     <input type="text"></input>
  //     <div className={styles.container}>
  //       <button className={styles.btn}>7</button>
  //       <button className={styles.btn}>8</button>
  //       <button className={styles.btn}>9</button>
  //       <button className={styles.btn}>+</button>
  //       <button className={styles.btn}>4</button>
  //       <button className={styles.btn}>5</button>
  //       <button className={styles.btn}>6</button>
  //       <button className={styles.btn}>-</button>
  //       <button className={styles.btn}>1</button>
  //       <button className={styles.btn}>2</button>
  //       <button className={styles.btn}>3</button>
  //       <button className={styles.btn}>*</button>
  //       <button className={styles.btn}>C</button>
  //       <button className={styles.btn}>0</button>
  //       <button className={styles.btn}>=</button>
  //       <button className={styles.btn}>/</button>
  //     </div>
  //   </div>
  // );
  const [display, setDisplay] = useState("");
  const [expression, setExpression] = useState([]);

  const handleClick = (value) => {
    setDisplay(value);
    setExpression([...expression, value]);
    console.log(expression);
  };

  const handleResult = () => {
    const result = expression
      .join("")
      .split(/(\D)/g)
      .map((value) => (value.match(/\d/g) ? parseInt(value, 0) : value))
      .reduce((acc, value, index, array) => {
        switch (value) {
          case "+":
            return (acc = acc + array[index + 1]);
          case "-":
            return (acc = acc - array[index + 1]);
          case "x":
            return (acc = acc * array[index + 1]);
          case "÷":
            return (acc = acc / array[index + 1]);
          case "C":
            return setDisplay("");
          default:
            return acc;
        }
      });
    setDisplay(result);
    setExpression("");
  };

  return (
    <div className="App">
      <h3 className={styles.display}>{display}</h3>

      <span className={styles.expression}>{expression}</span>

      <section className={styles.panel}>
        <section className={styles.numbers}>
          <button onClick={() => handleClick(7)}>7</button>
          <button onClick={() => handleClick(8)}>8</button>
          <button onClick={() => handleClick(9)}>9</button>

          <button onClick={() => handleClick(4)}>4</button>
          <button onClick={() => handleClick(5)}>5</button>
          <button onClick={() => handleClick(6)}>6</button>

          <button onClick={() => handleClick(1)}>1</button>
          <button onClick={() => handleClick(2)}>2</button>
          <button onClick={() => handleClick(3)}>3</button>

          <button onClick={() => handleClick(0)}>0</button>
          <button onClick={() => handleClick("÷")}>÷</button>
          <button onClick={() => handleClick("x")}>x</button>
          <button onClick={() => handleClick("-")}>-</button>
          <button onClick={() => handleClick("+")}>+</button>
          <button onClick={() => handleResult()}>=</button>
          <button onClick={() => handleResult()}>C</button>
        </section>

        {/* <section className={styles.numbers}>
          <button onClick={() => handleClick("÷")}>÷</button>
          <button onClick={() => handleClick("x")}>x</button>
          <button onClick={() => handleClick("-")}>-</button>
          <button onClick={() => handleClick("+")}>+</button>
          <button onClick={() => handleResult()}>=</button>
          <button onClick={() => handleResult()}>C</button>
        </section> */}
      </section>
    </div>
  );
}
