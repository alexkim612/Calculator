import React from 'react';
import Entry from './Entry.jsx';

class History extends React.Component {
  
  render(props) {
    console.log(this.props.history)
    return (
      <div className='history-wrapper'>

        <h3 className='history-header'>History</h3>

        <div className='history-feed'>
          {this.props.history.map((result, i) => 
            <Entry key={i} entry={result}></Entry>
          )}
        </div>
      </div>
    )
  }
}

export default History;