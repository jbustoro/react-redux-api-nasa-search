import React, { Component } from 'react';
import { Provider } from 'react-redux';
import logo from './assets/logo.svg';
import './assets/App.css';
import store from './store';
import Search from './components/Search';
import Result from './components/Result';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <Search />
          </header>
          <div className="results">
            <Result />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
