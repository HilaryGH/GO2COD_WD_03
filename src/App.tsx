import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<null | string>(null);

  const handleInput = (value: string | number) => {
    setInput(input + value);
  };

  const calculate = () => {
    try {
      setResult(eval(input));
    } catch (error) {
      setResult("Error");
    }
  };

  const clearInput = () => {
    setInput("");
    setResult(null);
  };
  const deleteLast = () => {
    setInput(input.slice(0, -1));
  };
  const toggleSign = () => {
    if (input) {
      if (input[0] === "-") {
        setInput(input.slice(1));
      } else {
        setInput("-" + input);
      }
    }
  };
  const calculatePercentage = () => {
    try {
      const percentage = eval(input) / 100;
      setResult(percentage.toString());
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <div className="calculator">
      <h2>Calculator</h2>
      <div className="display">
        <input type="text" value={input} readOnly />
        <div className="result">{result}</div>
      </div>
      <div className="buttons">
        <button onClick={() => handleInput("7")}>7</button>
        <button onClick={() => handleInput("8")}>8</button>
        <button onClick={() => handleInput("9")}>9</button>
        <button onClick={() => handleInput("+")}>+</button>
        <button onClick={() => handleInput("4")}>4</button>
        <button onClick={() => handleInput("5")}>5</button>
        <button onClick={() => handleInput("6")}>6</button>
        <button onClick={() => handleInput("-")}>-</button>
        <button onClick={() => handleInput("1")}>1</button>
        <button onClick={() => handleInput("2")}>2</button>
        <button onClick={() => handleInput("3")}>3</button>
        <button onClick={() => handleInput("*")}>*</button>
        <button onClick={() => handleInput(".")}>.</button>
        <button onClick={() => handleInput("0")}>0</button>
        <button onClick={clearInput}>C</button>
        <button onClick={() => handleInput("/")}>/</button>
        <button onClick={toggleSign}>+/-</button>
        <button onClick={calculatePercentage}>%</button>
        <button onClick={deleteLast}>⌫</button>
        <button
          style={{
            backgroundColor: "rgb(0, 191, 255)",
            color: "white",
          }}
          onClick={calculate}
        >
          =
        </button>
      </div>
    </div>
  );
}

export default App;
