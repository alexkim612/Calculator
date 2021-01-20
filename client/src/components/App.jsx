import React from 'react';
import Buttons from './Buttons.jsx';
import History from './History.jsx';

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      largeViewingWindow: '1+1'
    }

    this.btnClick = this.btnClick.bind(this);
    this.clear = this.clear.bind(this);
    this.delete = this.delete.bind(this);
    this.calculate = this.calculate.bind(this);
  }

  // button clicks
  btnClick(btn) {
    let name = btn.target.name;

    if (name === 'clear') {
      this.clear();
    } else if (name === 'delete') {
      this.delete();
    } else if (name === '=') {
      this.calculate();
    } else {
      this.setState({
        largeViewingWindow: this.state.largeViewingWindow += name
      });
    }
  }

  // clear
  clear() {
    this.setState({
      largeViewingWindow: ''
    });
  }

  // delete
  delete() {
    let curr = this.state.largeViewingWindow;
    curr = curr.slice(0, curr.length - 1);
    this.setState({
      largeViewingWindow: curr
    });
  }

  // calculate
  calculate() {
    let result = eval(this.state.largeViewingWindow);
    if (result) {
      this.setState({
        largeViewingWindow: result
      });
    } else {
      this.setState({
        largeViewingWindow: 'error'
      });
    }
  }

  render() {
    return (
      <div>
        <div className="largeViewingWindow">
          <p>{this.state.largeViewingWindow}</p>
        </div>

        <Buttons btnClick={this.btnClick}>
        </Buttons>
      </div>
    );
  }
}

export default App;