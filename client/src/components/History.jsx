import React from 'react';

class History extends React.Component {
  
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