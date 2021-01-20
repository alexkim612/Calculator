import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import History from './components/History.jsx';

// Calculator
ReactDOM.render(<App />, document.getElementById("app"));

// History
ReactDOM.render(<History />, document.getElementById("history"));