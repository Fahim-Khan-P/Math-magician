import React from 'react';
import calculate from '../Logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '',
      next: '',
      operation: '',
    };
  }

  handleClick = (e) => {
    const result = calculate(this.state, e.target.textContent);
    this.setState(result);
  }

  render() {
    const { total, next } = this.state;
    const operationResult = !next ? total : next;
    return (
      <div className="calculator">
        <div className="displaySection">
          <input type="text" className="resultDisplay" readOnly value={operationResult || 0} />
        </div>

        <div className="buttonSection">
          <button type="button" className="button" onClick={this.handleClick}>AC</button>
          <button type="button" className="button" onClick={this.handleClick}>+/-</button>
          <button type="button" className="button" onClick={this.handleClick}>%</button>
          <button type="button" className="button operator" onClick={this.handleClick}>÷</button>

          <button type="button" className="button" onClick={this.handleClick}>7</button>
          <button type="button" className="button" onClick={this.handleClick}>8</button>
          <button type="button" className="button" onClick={this.handleClick}>9</button>
          <button type="button" className="button operator" onClick={this.handleClick}>x</button>

          <button type="button" className="button" onClick={this.handleClick}>4</button>
          <button type="button" className="button" onClick={this.handleClick}>5</button>
          <button type="button" className="button" onClick={this.handleClick}>6</button>
          <button type="button" className="button operator" onClick={this.handleClick}>-</button>

          <button type="button" className="button" onClick={this.handleClick}>1</button>
          <button type="button" className="button" onClick={this.handleClick}>2</button>
          <button type="button" className="button" onClick={this.handleClick}>3</button>
          <button type="button" className="button operator" onClick={this.handleClick}>+</button>

          <button type="button" className="button zeroBtn" onClick={this.handleClick}>0</button>
          <button type="button" className="button" onClick={this.handleClick}>.</button>
          <button type="button" className="button operator" onClick={this.handleClick}>=</button>
        </div>
      </div>
    );
  }
}
export default Calculator;
