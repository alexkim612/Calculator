import React from 'react';
import Entry from './Entry.jsx';

const SERVER = 'http://localhost:9000'
import socketIOClient from 'socket.io-client';
var socket;

class History extends React.Component {
  constructor() {
    super();

    this.state = {
      history: ['a', 'b', 'c']
    }

    socket = socketIOClient(SERVER);
    socket.on('connection', () => {
        console.log('connected to back-end History');
      });
  }

  componentDidMount() {
    this.updateHistory()
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