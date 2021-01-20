import React from 'react';

class Buttons extends React.Component {


  render() {
    return (
      <div className="btn-wrapper">
        <button className="" name="clear">Clear</button>
        <button className="" name="delete">Delete</button>
        <button className="" name="÷">÷</button>

        <button className="" name="7">7</button>
        <button className="" name="8">8</button>
        <button className="" name="9">9</button>
        <button className="" name="x">x</button>

        <button className="" name="4">4</button>
        <button className="" name="5">5</button>
        <button className="" name="6">6</button>
        <button className="" name="-">-</button>

        <button className="" name="1">1</button>
        <button className="" name="2">2</button>
        <button className="" name="3">3</button>
        <button className="" name="+">+</button>

        <button className="" name="0">0</button>
        <button className="" name=".">.</button>
        <button className="" name="=">=</button>
      </div>
    )
  }
}

export default Buttons;