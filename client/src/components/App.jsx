import React from 'react';
import Buttons from './Buttons.jsx';
import History from './History.jsx';
import ViewingWindow from './ViewingWindow.jsx';

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      largeViewingWindow: '1+1'
    }

    this.btnClick = this.btnClick.bind(this);
    this.calculate = this.calculate.bind(this);
    this.clear = this.clear.bind(this);
  }

  // button clicks
  btnClick() {

  }

  // calculate
  calculate() {
    let result = eval(this.largeViewingWindow);
    if (result) {
      this.largeViewingWindow = result;
    } else {
      this.clear();
      throw new Error ('Arithmetic error');
    }
  }

  // clear
  clear() {
    this.setState({
      viewingWindow: ''
    });
  }
  
  render() {
    return (
      <div>
        <ViewingWindow viewingWindow={this.viewingWindow}>
        </ViewingWindow>
        <div className="largeViewingWindow">
          <p>{this.state.largeViewingWindow}</p>
        </div>

        <Buttons>
        </Buttons>

        <History>
        </History>
      </div>
    );
  }
}

export default App;