import React, { Component } from 'react';
import logo from './logo.svg';
import GameContainer from './components/GameContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <GameContainer />
      </div>
    );
  }
}

export default App;
