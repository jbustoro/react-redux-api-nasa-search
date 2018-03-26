import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './components/Search';
import Result from './components/Result';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <br />
          <Search />
        </header>
        <br />
        <div className="results">
          <Result />
        </div>
      </div>
    );
  }
}

export default App;
