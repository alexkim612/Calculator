import React from 'react';
import Buttons from './Buttons.jsx';
import History from './History.jsx';

const SERVER = 'http://localhost:9000'
import socketIOClient from 'socket.io-client';
var socket;

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      largeViewingWindow: '1+1'
    }
    socket = socketIOClient(SERVER);
    socket.on('connection', () => {
      console.log('connected to back-end App');
    });

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
    try {
      eval(this.state.largeViewingWindow);
      let result = eval(this.state.largeViewingWindow);
      socket.emit('result', `${this.state.largeViewingWindow} = ${result}`);
      this.setState({
        largeViewingWindow: result
      });
    } catch(e) {
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
        
        <History></History>
      </div>
    );
  }
}

export default App;