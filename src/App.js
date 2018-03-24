import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { Provider } from 'react-redux';
import { showResults, setSearchTerm } from './actions';
import store from './store';
import { Form, FormGroup, FormControl, Button } from 'react-bootstrap';

class App extends Component {
  handleChange(event) {
    this.props.setSearchTerm(event.currentTarget.value);
  }

  handleClick(event) {
    event.preventDefault();
    this.props.showResults(this.props.searchTerm);
  }

  renderResults() {
    return this.props.results.map(result => {
      return <img src={result.links[0].href} />;
    });
  }

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <br />
            <Form inline>
              <FormGroup controlId="formInlineName">
                <FormControl
                  type="text"
                  value={this.props.searchTerm}
                  onChange={event => this.handleChange(event)}
                />
              </FormGroup>{' '}
              <Button type="submit" onClick={event => this.handleClick(event)}>
                Search
              </Button>
            </Form>
          </header>
          <br />
          <div className="results">{this.renderResults()}</div>
        </div>
      </Provider>
    );
  }
}

const mapStateToProps = state => ({
  searchTerm: state.searchTerm,
  results: state.results
});

const mapDispatchToProps = {
  setSearchTerm,
  showResults
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
