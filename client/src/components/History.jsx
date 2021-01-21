import React from 'react';
const SERVER = 'http://localhost:9000'

import socketIOClient from 'socket.io-client';
var socket;

class History extends React.Component {
  constructor() {
    super();

    this.state = {
      
    }

    socket = socketIOClient(SERVER);
    socket.on('connection', () => {
      console.log('connected to back-end History');
    });
  }
  
  render() {
    return (
      <div className='history-wrapper'>
        <h3 className='history-header'>History</h3>

        <div className='history-feed'>
          <p>ID : 1+1=2</p>
          <p>ID : 2+2=4</p>
          <p>ID : 2+2=4</p>
          <p>ID : 2+2=4</p>
          <p>ID : 2+2=4</p>
        </div>
      </div>
    )
  }
}

export default History;