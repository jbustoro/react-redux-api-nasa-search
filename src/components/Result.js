import React, { Component } from 'react';
import { connect } from 'react-redux';
import { REQUESTED, SUCCEEDED, FAILED } from '../reducers';
import LoadIndicator from './LoadIndicator';

const ResultDisplay = props => {
  if (props.results.length) {
    return props.results.map((result, index) => {
      return (
        <img
          key={index}
          src={result.links[0].href}
          alt={result.data[0].title}
        />
      );
    });
  } else {
    return <h4>No results found.</h4>;
  }
};

class Result extends Component {
  render() {
    return (
      <LoadIndicator
        fetchState={this.props.fetchState}
        component={<ResultDisplay results={this.props.results} />}
        error={this.props.errorMessage}
      />
    );
  }
}

const mapStateToProps = state => ({
  results: state.results,
  fetchState: state.fetchState,
  errorMessage: state.errorMessage
});

export default connect(mapStateToProps)(Result);
