import React from 'react';
import Buttons from './Buttons.jsx';
import History from './History.jsx';
import Result from './Result.jsx';

class App extends React.Component {
  constructor(props){
    super(props);
  }
  
  render() {
    return (
      <div>
        <Result>
        </Result>

        <Buttons>
        </Buttons>

        <History>
        </History>
      </div>
    );
  }
}

export default App;