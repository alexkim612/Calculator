import React from 'react';
import Buttons from './Buttons.jsx';
import History from './History.jsx';
import axios from 'axios';

const SERVER = 'http://localhost:9000'
import socketIOClient from 'socket.io-client';
var socket;

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      largeViewingWindow: '',
      history: []
    }

    socket = socketIOClient(SERVER);
    socket.on('connection', () => {
      console.log('connected to App');
    });

    this.btnClick = this.btnClick.bind(this);
    this.clear = this.clear.bind(this);
    this.delete = this.delete.bind(this);
    this.calculate = this.calculate.bind(this);
  }

  componentDidMount() {
    this.getFirstFive();
  }

  getFirstFive() {
    axios.get('/firstFive')
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
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

      this.sendResult(result);

      this.setState({
        largeViewingWindow: result
      });
    } catch(e) {
      this.setState({
        largeViewingWindow: 'error'
      });
    }
  }

  // send results to server
  sendResult(result) {
    socket.emit('result', `${this.state.largeViewingWindow} = ${result}`);
  }


  render() {
    return (
      <div>
        <div className="largeViewingWindow">
          <p>{this.state.largeViewingWindow}</p>
        </div>

        <Buttons btnClick={this.btnClick}>
        </Buttons>
        
        <History history={this.state.history}></History>
      </div>
    );
  }
}

export default App;