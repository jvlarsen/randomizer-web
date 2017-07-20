import React, { Component } from 'react';
import logo from './logo.svg';
import './index.css';
import Participant from './components/Participant';
import RandomizerButton from './components/RandomizerButton';
import Input from './components/Input';
import TeamBox from './components/TeamBox';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Participant />
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <TeamBox placeholderText='Home team'/>
        <TeamBox placeholderText='Away team'/>
        <RandomizerButton />
        <Input placeholderText="Participant name"/>
        <Input placeholderText="Player name" />
      </div>
    );
  }
}

export default App;
