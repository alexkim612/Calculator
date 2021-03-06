import React from 'react';
import Entry from './Entry.jsx';
import axios from 'axios';

const SERVER = 'http://54.201.182.157:9000'
import socketIOClient from 'socket.io-client';
var socket;

class History extends React.Component {
  constructor() {
    super();

    this.state = {
      history: []
    }

    socket = socketIOClient(SERVER);
    socket.on('connection', () => {
        console.log('connected to History');
      });
  }

  componentDidMount() {
    // only grab on first time loading
    if (this.state.history.length === 0) {
      this.getFirstFive();
    }

    this.updateHistory()
  }

  // get first five entries from db
  getFirstFive() {
    axios.get('http://54.201.182.157:9000/firstFive')
    .then((response) => {
      let data = response.data;
      let firstFiveEntries = [];

      for (const entry of data) {
        firstFiveEntries.push(entry.equation);
      }

      this.setState({
        history: firstFiveEntries
      });

    })
    .catch((err) => {
      console.log(err);
    });
  }

  // retrieve new history and update
  updateHistory() {
    socket.on('result', (newResult) => {
      let newHistory = this.state.history;

      if (this.state.history.length >= 5) newHistory.pop();

      newHistory.unshift(newResult);
      this.setState({
        history: newHistory
      });

    });
  }

  render() {
    return (
      <div className='history-wrapper'>
        <h3 className='history-header'>History</h3>

        <div className='history-feed'>
          {this.state.history.map((result, i) => 
            <Entry key={i} entry={result}></Entry>
          )}
        </div>
      </div>
    )
  }
}

export default History;