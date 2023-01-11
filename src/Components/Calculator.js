import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="calculator">
        <div className="displaySection">
          <input type="text" className="resultDisplay" readOnly value="0" />
        </div>

        <div className="buttonSection">
          <button type="button" className="button">AC</button>
          <button type="button" className="button">+/-</button>
          <button type="button" className="button">%</button>
          <button type="button" className="button operator">/</button>

          <button type="button" className="button">7</button>
          <button type="button" className="button">8</button>
          <button type="button" className="button">9</button>
          <button type="button" className="button operator">x</button>

          <button type="button" className="button">4</button>
          <button type="button" className="button">5</button>
          <button type="button" className="button">6</button>
          <button type="button" className="button operator">-</button>

          <button type="button" className="button">1</button>
          <button type="button" className="button">2</button>
          <button type="button" className="button">3</button>
          <button type="button" className="button operator">+</button>

          <button type="button" className="button zeroBtn">0</button>
          <button type="button" className="button">.</button>
          <button type="button" className="button operator">=</button>
        </div>
      </div>
    );
  }
}
export default Calculator;
