import React from 'react';

class Buttons extends React.Component {


  render() {
    return (
      <div className="btn-wrapper">
        <button className="clear" name="clear" onClick={e => {this.props.btnClick(e)}}>Clear</button>
        <button name="delete" onClick={e => {this.props.btnClick(e)}}>Delete</button>
        <button name="/" onClick={e => {this.props.btnClick(e)}}>÷</button>

        <button name="7" onClick={e => {this.props.btnClick(e)}}>7</button>
        <button name="8" onClick={e => {this.props.btnClick(e)}}>8</button>
        <button name="9" onClick={e => {this.props.btnClick(e)}}>9</button>
        <button name="*" onClick={e => {this.props.btnClick(e)}}>x</button>

        <button name="4" onClick={e => {this.props.btnClick(e)}}>4</button>
        <button name="5" onClick={e => {this.props.btnClick(e)}}>5</button>
        <button name="6" onClick={e => {this.props.btnClick(e)}}>6</button>
        <button name="-" onClick={e => {this.props.btnClick(e)}}>-</button>

        <button name="1" onClick={e => {this.props.btnClick(e)}}>1</button>
        <button name="2" onClick={e => {this.props.btnClick(e)}}>2</button>
        <button name="3" onClick={e => {this.props.btnClick(e)}}>3</button>
        <button name="+" onClick={e => {this.props.btnClick(e)}}>+</button>

        <button name="0" onClick={e => {this.props.btnClick(e)}}>0</button>
        <button name="." onClick={e => {this.props.btnClick(e)}}>.</button>
        <button className="equal" name="=" onClick={e => {this.props.btnClick(e)}}>=</button>
      </div>
    )
  }
}

export default Buttons;