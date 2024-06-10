import React, { useState } from 'react';
import './cal.css';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const handleClick = (value) => {
    if (value === '=') {
      try {
        setResult(eval(input));
      } catch (e) {
        setResult('Error');
      }
    } 
    else if (value === 'AC') 
    {
      setInput('');
      setResult('');
    } 
    else if(value==='DEL')
    {
      setInput(input.slice(0,-1));
    }
    else 
    {
      setInput(input + value);
    }
  };

  return (
    <div className="calculator">
      <h2>CALCULATOR</h2>
      <div className="display">
        <div className="input">{input}</div>
      </div>
      <div className="buttons">
        <button onClick={() => handleClick('1')} className="button">1</button>
        <button onClick={() => handleClick('2')} className="button">2</button>
        <button onClick={() => handleClick('3')} className="button">3</button>
        <button onClick={() => handleClick('+')} className="button">+</button>
        <button onClick={() => handleClick('4')} className="button">4</button>
        <button onClick={() => handleClick('5')} className="button">5</button>
        <button onClick={() => handleClick('6')} className="button">6</button>
        <button onClick={() => handleClick('-')} className="button">-</button>
        <button onClick={() => handleClick('7')} className="button">7</button>
        <button onClick={() => handleClick('8')} className="button">8</button>
        <button onClick={() => handleClick('9')} className="button">9</button>
        <button onClick={() => handleClick('*')} className="button">*</button>
        <button onClick={() => handleClick('0')} className="button">0</button>
        <button onClick={() => handleClick('=')} className="button">=</button>
        <button onClick={() => handleClick('AC')} className="button">AC</button>
        <button onClick={() => handleClick('/')} className="button">/</button>
        <button onClick={() => handleClick('.')} className="button">.</button>
        <button onClick={() => handleClick('00')} className="button">00</button>
        <button onClick={() => handleClick('DEL')} className="button">del</button>
      </div>
      <div className="result-display">
        <div className="result">{result}</div>
      </div>
    </div>
  );
};

export default Calculator;