import React from 'react';
import socketClient from 'socket.io-client';
const SERVER = 'http://localhost:9000'

class History extends React.Component {
  constructor() {
    super();

    this.state = {

    }
  }
  
  render() {
    let socket = socketClient(SERVER);
    socket.on('connection', () => {
      console.log('connected to backend');
    });

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