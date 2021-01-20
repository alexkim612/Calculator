import React from 'react';

class Buttons extends React.Component {


  render() {
    return (
      <div className="btn-wrapper">
        <button className="btn-double" name="clear">Clear</button>
        <button name="delete" onClick={e => {this.props.btnClick(e)}}>Delete</button>
        <button name="÷">÷</button>

        <button name="7">7</button>
        <button name="8">8</button>
        <button name="9">9</button>
        <button name="x">x</button>

        <button name="4">4</button>
        <button name="5">5</button>
        <button name="6">6</button>
        <button name="-">-</button>

        <button name="1">1</button>
        <button name="2">2</button>
        <button name="3">3</button>
        <button name="+">+</button>

        <button name="0">0</button>
        <button name=".">.</button>
        <button className="btn-double" name="=">=</button>
      </div>
    )
  }
}

export default Buttons;