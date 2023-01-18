import React, { useState } from 'react';
import calculate from '../Logic/calculate';

const Calculator = () => {
  const [obj, setObj] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const { total, next } = obj;
  const operationResult = !next ? total : next;

  const handleClick = (e) => {
    const result = calculate(obj, e.target.textContent);
    setObj(result);
  };

  return (
    <div className="claculatorView">
      <h2>Lets do some Math!</h2>
      <div className="calculator">
        <div className="displaySection">
          <input type="text" className="resultDisplay" readOnly value={operationResult || 0} />
        </div>

        <div className="buttonSection">
          <button type="button" className="button" onClick={handleClick}>AC</button>
          <button type="button" className="button" onClick={handleClick}>+/-</button>
          <button type="button" className="button" onClick={handleClick}>%</button>
          <button type="button" className="button operator" onClick={handleClick}>÷</button>

          <button type="button" className="button" onClick={handleClick}>7</button>
          <button type="button" className="button" onClick={handleClick}>8</button>
          <button type="button" className="button" onClick={handleClick}>9</button>
          <button type="button" className="button operator" onClick={handleClick}>x</button>

          <button type="button" className="button" onClick={handleClick}>4</button>
          <button type="button" className="button" onClick={handleClick}>5</button>
          <button type="button" className="button" onClick={handleClick}>6</button>
          <button type="button" className="button operator" onClick={handleClick}>-</button>

          <button type="button" className="button" onClick={handleClick}>1</button>
          <button type="button" className="button" onClick={handleClick}>2</button>
          <button type="button" className="button" onClick={handleClick}>3</button>
          <button type="button" className="button operator" onClick={handleClick}>+</button>

          <button type="button" className="button zeroBtn" onClick={handleClick}>0</button>
          <button type="button" className="button" onClick={handleClick}>.</button>
          <button type="button" className="button operator" onClick={handleClick}>=</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
